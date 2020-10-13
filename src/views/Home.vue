<template>
  <div id="page-top" class="h-100">
    <div id="wrapper" class="h-100">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column h-100">
        <main id="content container">
          <TopNavBar />
          <div class="container-fluid">

          <div class="row">
            
            <div class="col-4">
              <div class="card">
                <img src="https://www.eprogramar.com.br/assets/images/slider-1.png" class="card-img-top" alt="Tumbnail Curso">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>   

            <div class="col-4">
              <div class="card">
                <img src="https://www.eprogramar.com.br/assets/images/slider-2.png" class="card-img-top" alt="Tumbnail Curso">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>  
                     
            <div class="col-4">
              <div class="card">
                <img src="https://www.eprogramar.com.br/assets/images/slider-3.png" class="card-img-top" alt="Tumbnail Curso">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
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
  .card img {
    height: 210px;
  }
</style>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";
import storage from "../services/storage";

console.log(`existUser = ${storage.isLoggedIn()}`)

export default {
  name: "Home",
  components: {
    TopNavBar,
    TopNavBarLogoutModal,
    Footer
  },
};
</script>
