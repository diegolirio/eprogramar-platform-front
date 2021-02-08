<template>

    <div>
        <AppBar :navigate="navigate" />                
        
        <v-main >            
              <v-btn style="width: 50%;" color="secondary">
                  <v-icon style="margin-right: 10px;">mdi-reply</v-icon> Voltar
              </v-btn>    
              <v-btn style="width: 50%;" color="success">
                  <v-icon style="margin-right: 10px;">mdi-check</v-icon> Concluido
              </v-btn>

              <div class="video-container">
                  
                  <iframe src="https://www.youtube.com/embed/qaixOjsOX6s"
                          allowfullscreen="true" 
                          webkitallowfullscreen="true" 
                          mozallowfullscreen="true" >
                  </iframe>              

              </div>

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
  data:() => ({

  }),
  beforeMount() {
    this.navigate = true; 
  }
}
</script>
<style scoped>
.video-container {
  margin-top: 0px;
  position: relative;
  padding-bottom: 50%; /* 16:9 */
  height: 0;
  border: 1px solid #c3c3c3;

}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}
div.btn__content {
  padding: 0;
}

div.card__actions .btn {
  min-width: 0;
}
</style>