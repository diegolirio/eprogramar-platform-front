<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" />
          <div class="container-fluid">
            <img alt="Vue logo" src="../assets/logo.png" />
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

<script>
// @ is an alias to /src
import TopNavBar from "@/components/TopNavBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Classroom",
  components: {
    TopNavBar,
    Sidebar,
    TopNavBarLogoutModal,
    Footer
  },
};
</script>
