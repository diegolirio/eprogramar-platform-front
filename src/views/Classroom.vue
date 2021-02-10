<template>

    <div>
        <AppBar :navigate="isNavigationDrawer" :course="currentCourse" />                
        
        <v-main >         
              <v-col cols="12"  v-if="loading">
                <v-progress-linear
                  indeterminate
                  rounded
                  :active="loading"
                  background-opacity="0.42"
                  buffer-value="100"
                  height="7"
                  value="0"
                  color="light-blue"
                ></v-progress-linear>
              </v-col>                       
              <v-btn style="width: 50%;" color="secondary">
                  <v-icon style="margin-right: 10px;">mdi-reply</v-icon> Voltar
              </v-btn>    
              <v-btn style="width: 50%;" color="success">
                  <v-icon style="margin-right: 10px;">mdi-check</v-icon> Concluido
              </v-btn>

              <div class="video-container">
                  
                  <iframe :src="video"
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
import storage from "../services/storage";
import Course from '../services/course';
import { mapGetters } from "vuex";
export default {
  
  name: "Classroom",
  components: {
    AppBar
  },
  data:() => ({
      loading: true,
      courseId: '',
      currentCourse: {},
      currentSection: {},
      userName: '',
      userEmail: '',
  }),
  beforeMount() {
    this.isNavigationDrawer = true; 
  },
  created() {
    this.userEmail = storage.getCurrentUser();
    this.userName = storage.getCurrentUserName();
    this.courseId = this.$route.query.courseId 
    this.getCourse(this.courseId);
    this.getMovieId(this.$route.query.currentMovie);
    this.loading = false;
  },  
  methods: {
    getMovieId(path) {
      const splited = path.split('/');      
      let videoId = splited[splited.length-1];
      this.$store.commit("videoStore/setVideo", videoId);
      return videoId;
    },
    getCourse(id) {
     Course.getCoursesById(id).then(response => {
       this.currentCourse = response.data;
       this.$store.commit('sectionStore/setSection', this.currentCourse.sections[0]); 
     });
    },
  },
  computed: {
    ...mapGetters({
      video: "videoStore/video",
      section: "sectionStore/section",
    })
  }, 
  mounted: {    
  } 
}
</script>
<style scoped>
.video-container {
  margin-top: 0px;
  position: relative;
  padding-bottom: 50%; /* 16:9 */
  height: 0;
  background-color: black;
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