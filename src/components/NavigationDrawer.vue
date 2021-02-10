<template>
    <v-navigation-drawer
      v-model="drawer"
      width="300"
      app
    >      

            <v-card
                outlined
            >
                <v-list-item three-line>


                    <v-card-actions>
                            <v-btn icon xsmall 
                                @click="drawer = !drawer"
                            > 
                                <v-icon color="blue-grey darken-1">mdi-arrow-left</v-icon>
                            </v-btn>
                    </v-card-actions>

                    <v-list-item-content>
                        <!-- <div class="overline mb-4">
                        OVERLINE
                        </div> -->
                        <v-list-item-subtitle class="headline mb-1">
                            {{course.name}}
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <!-- <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    >
                        <v-img :aspect-ratio="16/8" :src="course.tumbnail"></v-img>                    
                    </v-list-item-avatar> -->
                </v-list-item>

            </v-card>            

            <v-expansion-panels>
                <v-expansion-panel
                v-for="s in course.sections"
                :key="s._id"
                >
                <v-expansion-panel-header>
                    {{ s.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                        <v-list subheader>

                        <v-list-item
                            v-for="sc in s.contents" :key="sc.id"
                            v-on:click.prevent="setSectionContent(sc)"
                        >
 
                            <v-list-item-icon>
                                <v-icon>
                                    mdi-play
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-subtitle v-text="`${sc.description}`"></v-list-item-subtitle>
                            </v-list-item-content>
                            
                        </v-list-item>
                        </v-list>          
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['drawer', 'course'],
    data: () => ({
      
    }),
    methods: {
        setModule(event) {
            let currentSection = this.currentCourse.sections.filter(s => s._id === event.target.value)[0];
            this.$store.commit("sectionStore/setSection", currentSection);
            this.sectionContentCurrent = currentSection.contents[0];
        },
        setSectionContent(sectionContent) {
            this.sectionContentCurrent = sectionContent;
            const splited = sectionContent.value.split('/');      
            let videoId = splited[splited.length-1];
            this.$store.commit("videoStore/setVideo", videoId);
        }        
    }
  }
</script>