<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        
        <main id="content">
          <TopNavBar :has-side-bar="true"/>
          <div class="container-fluid">
            <img alt="Vue logo" src="../assets/logo.png" />
            <br>
            <img alt="Vue logo" src="../assets/logo.png" />
            <br>
            <img alt="Vue logo" src="../assets/logo.png" />
            <br>
            <img alt="Vue logo" src="../assets/logo.png" />
            <br>
            <img alt="Vue logo" src="../assets/logo.png" />
            <br>
            <img alt="Vue logo" src="../assets/logo.png" />
          </div>
        </main>

        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
      
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

<script>
// @ is an alias to /src
import TopNavBar from "@/components/TopNavBar.vue";
import Sidebar from   "@/components/Sidebar.vue"
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";

export default {
  name: "Classroom",
  components: {
    TopNavBar,
    Sidebar,
    TopNavBarLogoutModal
  },
};
</script>
