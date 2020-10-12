<template>
  <div id="page-top" class="h-100">
    <div id="wrapper" class="h-100">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column h-100">
        <main id="content container">
          <TopNavBar />
          <div class="container-fluid">
            <p>TODO: Cards Courses</p>
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
</style>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    TopNavBar,
    TopNavBarLogoutModal,
    Footer
  },
};
</script>
