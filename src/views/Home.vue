<template>
  <div id="page-top" class="h-100">
    <div id="wrapper" class="h-100">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column h-100">
        <main id="content container">
          <TopNavBar />
          <div class="container-fluid">

            <div class="card" v-for="course in this.courses" :key="course.id">
              <img :src="course.tumbnail" class="img-responsive mx-auto d-block card-course" alt="Curso">
              <div class="card-body">
                <h5 class="card-title">{{course.name}}</h5>
                <a @click="playCourse(course._id)" class="btn btn-primary">
                  <i class="fas fa-play"></i> 
                  Assistir Curso
                </a>
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
  .card {
    margin: 20px;
  }
  .card img {
    height: 210px;
    width: 450px;
  }
  .btn-primary {
    background-color: #49007c !important;
    border-color: #49007c !important;
    color: #fff;
  }
  .btn-primary:hover {
    background-color: #7b2bb4 !important;
    border-color: #49007c !important;
    color: #fff;
  }
</style>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";
import storage from "../services/storage";
import Course from '../services/course';

console.log(`existUser = ${storage.isLoggedIn()}`)

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
    }
  },
  beforeMount() {
    this.getCourses()
  },
  methods: {
    getCourses() {
      console.log("getCourses()...");
      Course.getCoursesByUser(storage.getCurrentUser()).then(response => {
        console.log(response.data);
        this.courses = response.data;
      });
    },
    playCourse(id) {
      console.log(`id: ${id}`);
      this.$router.push(`/classroom/${id}`);
    }
  }
};
</script>
