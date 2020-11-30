<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar :currentCourse="currentCourse" />

      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" :userName="userName" :userEmail="userEmail" />
          <div class="container-fluid">
            <div class="video-container">

                <iframe :src="video" 
                        width="640" 
                        height="400" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen>
                </iframe>

            </div>
          </div>
        </main>

        <Footer />

      </div>
    </div>

    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <TopNavBarLogoutModal />
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  margin-top: 0px;
  position: relative;
  padding-bottom: 70.50%; /* 16:9 */
  height: 0;
  
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
// @ is an alias to /src
import TopNavBar from "@/components/TopNavBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";
import Course from '../services/course';
import storage from "../services/storage";
import { mapGetters } from "vuex";

export default {
  name: "Classroom",
  data() {
    return {
      courseId: '',
      currentCourse: {},
      currentSection: {},
      userName: '',
      userEmail: '',
    }
  },
  components: {
    TopNavBar,
    Sidebar,
    TopNavBarLogoutModal,
    Footer,
  },
  created() {
    console.log('<<< ClassRoom >>>');
    this.userEmail = storage.getCurrentUser();
    this.userName = storage.getCurrentUserName();
    console.log('userEmail', this.userEmail);
    console.log('userName', this.userName);
    this.courseId = this.$route.query.courseId 
    this.getCourse(this.courseId);
    this.getMovieId(this.$route.query.currentMovie);
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
       console.log(this.currentCourse);
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
};
</script>
