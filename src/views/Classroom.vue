<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar v-bind:currentCourse="this.currentCourse" v-bind:currentSection="this.currentSection" />

      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" />
          <div class="container-fluid">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/9ysYuVJSKAQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
  margin-top: 45px;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
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

export default {
  name: "Classroom",
  data() {
    return {
      courseId: '',
      currentCourse: {},
      currentSection: {}
    }
  },
  components: {
    TopNavBar,
    Sidebar,
    TopNavBarLogoutModal,
    Footer,
  },
  created() {
    this.courseId = this.$route.params.courseId 
    console.log('id', this.courseId);
    this.getCourse(this.courseId);
  },
  methods: {
    getCourse(id) {
      console.log(`getCourse(${id})...`);
      Course.getCoursesById(id).then(response => {
        console.log('course', response.data);
        this.currentCourse = response.data;
        this.currentSection = this.currentCourse.sections[0];
      });
    },
  }
};
</script>
