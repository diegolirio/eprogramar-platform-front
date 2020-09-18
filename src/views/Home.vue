<template>
  <div>
    <TopNavBar />
    <div class="d-flex flex-column">
      <div>
        <div class="container-fluid">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar.vue";

export default {
  name: "Home",
  components: {
    TopNavBar,
  },
};
</script>
