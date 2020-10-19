<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow navbar-top">
    
    <div class="container">

      <div>
            <a href="/" class="navbar-brand">
              E-Programar LOGO
            </a>    
      </div>

      <ul class="navbar-nav ml-auto">

          <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">John B</span>
                <img class="img-profile rounded-circle" src="../assets/logo.png">
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

      </ul>


      </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-top {
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .topbar {
    height: auto;
  }
}

.button-proxima-aula {
  background-color: #49007c !important;
  border-color: #49007c !important;
}
</style>

<script>

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
    
  },
};
</script>