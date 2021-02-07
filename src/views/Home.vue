<template>

    <div>
        <AppBar :navigate="navigate"/>             
        <!-- <v-main class="">
            <router-link to="/classroom">
              <img alt="Vue logo" src="../assets/logo.png">
            </router-link>
        </v-main> -->
        <v-main>
          <v-container>
            <v-row>
              <v-col
                v-for="n in 4"
                :key="n"
                cols="4"
              >
                <v-card height="200" to="/classroom"></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>        
    </div>
</template>

<script>
import AppBar from '../components/AppBar';
export default {
  
  name: 'Home',
  components: {
    AppBar
  },  
  beforeMount() {
    this.navigate = false; 
  }
}
</script>
