<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" />
          <div class="container-fluid">
            <iframe
              width="900"
              height="500"
              class="video-exposed"
              src="https://www.youtube.com/embed/9ysYuVJSKAQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
.video-exposed {
  margin-top: 45px;
}
</style>

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
    Footer,
  },
};
</script>
