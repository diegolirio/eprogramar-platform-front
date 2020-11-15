<template>
  <div id="page-top" class="h-100">
    <div id="wrapper" class="h-100">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column h-100">
        <main id="content container">
          <TopNavBar :userName="userName" :userEmail="userEmail" />
          <div class="row">
              <div class="col-6" v-for="course in this.courses" :key="course.id">
              <div class="container-fluid">
                <!-- <div class="card-deck">
                <div class="card border-primary">
                  <div class="card-header">
                    <h5 class="card-title">{{course.name}}</h5>
                  </div>
                  <img :src="course.tumbnail" class="img-responsive mx-auto d-block card-course card-img" alt="Curso">
                  <div class="card-body">
                    
                    <a @click="playCourse(course._id)" class="btn btn-dark text-white">
                      <i class="fas fa-play"></i> 
                      Assistir Curso
                    </a>
                  </div>
                </div>
                </div> -->
                <div class="card border-primary mb-3" style="max-width: 100%;">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img :src="course.tumbnail" class="img-responsive mx-auto d-block card-course card-img rounded-left" alt="Curso">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-left">
                        <h5 class="card-title">{{course.name}}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <a @click="playCourse(course._id)" class="btn btn-success">
                          <i class="fas fa-play mr-1"></i>  
                          Assistir Curso
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <TopNavBarLogoutModal />
  </div>
</template>

<style lang="scss" scoped>
  main {
    min-height: 768px;
  }
  .container-fluid {
    border-block-color: #49007c;
  }
  .card {
    margin: 20px;
    border-block-color: #49007c;
  }
  .card img {
    height: 210px;
    width: 450px;
    border-radius: 10;
  }
  .card-img {
    /* max-height: 130px; */
    max-width: 220px;
  }
  .card-header {
    background-color: #49007c;
    color: #fff;
  }
  .btn-primary {
    background-color: #49007c !important;
    border-color: #49007c !important;
    color: #fff;
  }
  .btn-primary:hover {
    background-color: #7b2bb4 !important;
    border-color: #49007c !important;
    color: #fff !important;
  }
  .border-primary {
    border-color: #49007c !important;
  }
  .btn-success {
    background-color: #00ff80 !important;
    color: #49007c !important;
  }
  .btn-success:hover {
    background-color: #12a35b !important;
    border-color: #00ff80 !important;
    color: #fff !important;
  }
</style>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";
import storage from "../services/storage";
import Course from '../services/course';
import User from '../services/user';

export default {
  name: "Home",
  components: {
    TopNavBar,
    TopNavBarLogoutModal,
    Footer
  },
  data() {
    return {
      courses: [],
      userName: '',
      userEmail: ''
    }
  },
  beforeMount() {
    this.getCourses();   
  },
  created() {
    this.userName = storage.getCurrentUserName();
    this.userEmail = storage.getCurrentUser();
  },
  methods: {
    getCourses() {
      Course.getCoursesByUser(storage.getCurrentUser()).then(response => {
        this.courses = response.data;
      });
    },
    playCourse(id) {
      Course.getCoursesById(id).then(response => {
        this.currentCourse = response.data;
        this.currentSection = this.currentCourse.sections[0];
        const currentMovie = this.currentSection.contents[0].value;
        this.$router.push({path: '/classroom', query: {
          courseId: id, 
          currentMovie: currentMovie
        }
      });
      });

    },
  }
};
</script>
