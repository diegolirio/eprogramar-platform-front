<template>
  <div>
    <NavigationDrawer :drawer="drawer" v-if="navigate" :course="course" />
    <v-app-bar
      app
      flat
    >      

        <v-app-bar-nav-icon @click="drawer = !drawer" v-if="navigate" ></v-app-bar-nav-icon>

        <!-- <v-toolbar-title>Application</v-toolbar-title>  -->

        <v-row justify="start" align="center"> 
            <router-link to="/" style="color: inherit; text-decoration: none">
                <v-img 
                    style="margin-left: 20px"
                    src="../assets/logo.png" 
                    max-width="200"/>
            </router-link>
        </v-row>
        <v-row justify="end" align="center" >
            <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" style="margin-bottom: 20px;"> 
                    <v-icon style="font-size: 1.6rem">mdi-account-circle-outline</v-icon>
                </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <router-link :to="'/perfil'" style="color: inherit; text-decoration: none">
                            <v-row class="mr-0 ml-0">
                                <v-col cols="3">
                                    <v-avatar size="40" color="grey">
                                        <v-icon
                                            medium
                                            dark
                                        >
                                            mdi-account
                                        </v-icon>     
                                    </v-avatar>
                                </v-col>
                                <v-col cols="9"> 
                                    <div>
                                        <span class="font-weight-black">
                                            {{ getCurrentUserName() }}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="font-weight-thin">veja seu perfil</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </router-link>

                        <div style="cursor: pointer;" @click="setThemeDark(!themeDark)">      
                            <v-list-item>
                                <v-list-item-content
                                ><v-list-item-title class="font-weight-bold">
                                    Dark Mode</v-list-item-title
                                >
                                </v-list-item-content>
                                <v-list-item-action
                                ><v-switch v-model="$vuetify.theme.dark" />
                                </v-list-item-action>
                            </v-list-item>
                            <v-divider />                                                 
                        </div>

                       

                        <div style="cursor: pointer;" @click="logout">                           
                            <v-col cols="12" class="font-weight-medium">
                                Sair
                            </v-col>
                        </div>

                    </v-list-item-content>
                </v-card>                
            </v-menu>
        </v-row>
    </v-app-bar>        
  </div>  
</template>

<script>
  import NavigationDrawer from './NavigationDrawer'
  import storage from '../services/storage'
  export default {
    props: ['navigate', 'course'],
    components: {
        NavigationDrawer
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login');
        },
        getCurrentUserName() {
            return storage.getCurrentUserName();
        },
        setThemeDark(isDark) {
            this.themeDark = isDark;
            this.$vuetify.theme.dark = this.themeDark;
        }
    },     
    data: () => ({ 
        drawer: null, 
        themeDark: false
    }),
  }
</script>