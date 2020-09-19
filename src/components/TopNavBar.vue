<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button
      v-if="hasSideBar"
      @click="toggleTopSideBar()"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <!-- <div class="nav-item" v-for="menu in menus" :key="menu.order">
      <router-link class="nav-link" :to="menu.route">{{menu.name}}</router-link>
    </div>-->
    <div class="nav-item">
      <router-link class="nav-link" to="/">
        <img class="img-profile rounded-circle" src="../assets/logo-eprogramar.png" alt="Logo do eprogramar">
      </router-link>
    </div>
    <!-- <div class="nav-item">
      <router-link class="nav-link" to="/Login">Login</router-link>
    </div>-->

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <TopNavBarAlert />
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
        <TopNavBarMessage />
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <TopNavBarUserContext />
      </li>
    </ul>
  </nav>
</template>

<script>
import TopNavBarUserContext from "./TopNavBarUserContext";
import TopNavBarMessage from "./TopNavBarMessage";
import TopNavBarAlert from "./TopNavBarAlert";

let toggleTopSideBar = () => {
  window.$("body").toggleClass("sidebar-toggled");
  window.$(".sidebar").toggleClass("toggled");
  if (window.$(".sidebar").hasClass("toggled")) {
    window.$(".sidebar .collapse").collapse("hide");
  }
};

export default {
  name: "TopNavBar",
  components: {
    TopNavBarUserContext,
    TopNavBarMessage,
    TopNavBarAlert,
  },
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