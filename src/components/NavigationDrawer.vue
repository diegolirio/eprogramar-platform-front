<template>
    <v-navigation-drawer
      v-model="drawer"
      width="400"
      app
    >      
            <!-- <h1 align="center"> 
                Curso de Kotlin 
            </h1> -->
            
            

            <v-card
                outlined
            >
                <v-list-item three-line>


                    <v-card-actions>
                            <v-btn icon xsmall 
                                :to="{ 'path': '/'}"
                            > 
                                <v-icon color="blue-grey darken-1">mdi-arrow-left</v-icon>
                            </v-btn>
                    </v-card-actions>

                    <v-list-item-content>
                        <!-- <div class="overline mb-4">
                        OVERLINE
                        </div> -->
                        <v-list-item-title class="headline mb-1">
                            {{course.name}}
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    >
                        <v-img :aspect-ratio="16/8" :src="course.tumbnail"></v-img>                    
                    </v-list-item-avatar>
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
                        >

                            <v-list-item-icon>
                            <v-icon>
                                mdi-play
                            </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                            <v-list-item-title v-text="sc.description"></v-list-item-title>
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
      recent: [
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
        },
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
        },
      ],
    })
  }
</script>