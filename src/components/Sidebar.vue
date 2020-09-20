<template>
  <ul
    class="navbar-nav bg-gradient-eprogramar sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
      <img
        class="sidebar-brand-icon logo-sidebar"
        src="../assets/logo-eprogramar.png"
        alt="Logo do eprogramar"
      />
      <div class="sidebar-brand-text mx-3">Nome do Curso</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <div class="lesson-heading">
      <div class="lesson-heading__number">
        <small>Aula</small>
        <span>13</span>
      </div>
      <div class="lesson-heading__description">descrição da aula</div>
    </div>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Atividades</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="far fa-fw fa-file-alt"></i>
        <span>Instalar ambiente</span>
      </a>
    </li>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="far fa-fw fa-play-circle"></i>
        <span>Instalar ambiente</span>
      </a>
    </li>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="fab fa-fw fa-youtube"></i>
        <span>Instalar ambiente</span>
      </a>
    </li>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="far fa-fw fa-file-alt"></i>
        <span>Instalar ambiente</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" @click="toggleSidebar()" id="sidebarToggle"></button>
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.bg-gradient-eprogramar {
  background-color: #007bff;
  background-image: linear-gradient(180deg, #6d3396 10%, #37005d 100%);
  background-size: cover;
}

.logo-sidebar {
  height: 45px;
}

.lesson-heading {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  flex-wrap: wrap;
  font-weight: 700;
  margin-top: 5px;

  &__number {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }

  &__description {
    vertical-align: middle;
    text-align: center;
    font-size: 0.65rem;
  }

  .sidebar.toggled &__description {
    display: none;
  }
}
</style>

<script>
// Toggle the side navigation

let toggleSidebar = () => {
  window.$("body").toggleClass("sidebar-toggled");
  window.$(".sidebar").toggleClass("toggled");
  if (window.$(".sidebar").hasClass("toggled")) {
    window.$(".sidebar .collapse").collapse("hide");
  }
};

export default {
  name: "Sidebar",
  methods: {
    toggleSidebar: toggleSidebar,
  },
};
</script>