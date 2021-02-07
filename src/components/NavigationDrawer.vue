<template>
    <v-navigation-drawer
      v-model="drawer"
      app
    >      
            <!-- <h1 align="center"> 
                Curso de Kotlin 
            </h1> -->
            
            <v-img :aspect-ratio="16/8" src="https://miro.medium.com/max/3840/1*MCU8J5-roudxIIYt1U1J1A.jpeg">
                <br/>
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col align="center">                    
                    <h1 class="body-1">Curso de Kotlin</h1>
                </v-col>
                </v-row>
            </v-img>

            <v-expansion-panels>
                <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
                >
                <v-expansion-panel-header>
                    Item
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['drawer']
  }
</script>