<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow navbar-top">
    <!-- Sidebar Toggle (Topbar) -->
    <button
      v-if="hasSideBar"
      @click="toggleTopSideBar()"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <div>
      <i class="far fa-fw fa-play-circle"></i>
      <span class="ml-2 d-lg-inline text-gray-600">02. Instalar ambiente</span>
    </div>

    <a href="#" class="btn btn-primary btn-icon-split btn-lg button-proxima-aula">
      <span class="icon text-white-50">
        <i class="fas fa-arrow-circle-right"></i>
      </span>
      <span class="text">Próxima Aula</span>
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-top {
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
}

.button-proxima-aula {
  background-color: #6d3396 !important;
  border-color: #6d3396 !important;
}
</style>

<script>
let toggleTopSideBar = () => {
  window.$("body").toggleClass("sidebar-toggled");
  window.$(".sidebar").toggleClass("toggled");
  if (window.$(".sidebar").hasClass("toggled")) {
    window.$(".sidebar .collapse").collapse("hide");
  }
};

export default {
  name: "TopNavBar",
  components: {},
  props: {
    hasSideBar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => {
    return {
      menus: [
        { name: "Home", route: "/", order: 1 },
        { name: "Classroom", route: "/classroom", order: 2 },
        { name: "Login", route: "/login", order: 3 },
      ],
    };
  },
  methods: {
    toggleTopSideBar: toggleTopSideBar,
  },
};
</script>