<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar :currentCourse="currentCourse" :currentSection="currentSection" />

      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" :userName="userName" :userEmail="userEmail" />
          <div class="container-fluid">
            <div class="video-container">
              <!-- <iframe
                src="https://www.youtube.com/embed/9ysYuVJSKAQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> -->

              <!-- <iframe src="https://vimeo.com/476755283/197ce574f1" 
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe> -->

                      <iframe :src="'https://player.vimeo.com/video/' + this.getMovieId(this.$route.query.currentMovie)" 
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
  },
  methods: {
    getMovieId(path) {
      const splited = path.split('/');
      return splited[splited.length-1];
    },
    getCourse(id) {
      Course.getCoursesById(id).then(response => {
        this.currentCourse = response.data;
        this.currentSection = this.currentCourse.sections[0];
      });
    },
  }
};
</script>
