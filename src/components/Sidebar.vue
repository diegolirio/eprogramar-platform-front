<template>
  <ul
    class="navbar-nav bg-gradient-eprogramar sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
      <img
        class="sidebar-brand-icon logo-sidebar"
        :src="currentCourse.tumbnail"
        alt="Logo do eprogramar"
      />
      <div class="sidebar-brand-text mx-3">{{currentCourse.name}}</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <div class="lesson-heading">
      <div class="lesson-heading__description">
        <small>Descrição</small>
        <span>{{currentSection.name}}</span>
      </div>
      <div class="lesson-heading__number">
        <small>Módulos</small>
        <!-- <span>{{currentCourse.sections.length}}</span> -->
        <span>{{this.sectionsQuantity}}</span>
      </div>
    </div>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading text-eprogramar-green">
      Conteúdo
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item" v-for="sectionContent in currentSection.contents" :key="sectionContent.id">
      <a class="nav-link" href="#">
        <i class="far fa-fw fa-play-circle"></i>
        <span>{{sectionContent.description}}</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block other-modules__line" />

    <div class="sidebar-heading other-modules__title text-eprogramar-green">Módulos</div>

    <div class="other-modules">
      <select class="other-modules__select">
        <option v-for="section in currentCourse.sections" 
                :key="currentCourse.sections._id"
                :value="section._id">
                {{section.name}}
        </option>
      </select>
    </div>
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
  background-color: #49007C;
  background-image: linear-gradient(180deg, #49007C 10%, #37005d 100%);
  background-size: cover;
}

.logo-sidebar {
  height: 45px;
}

.other-modules {
  height: 56px;
  margin-bottom: 5px;
  padding: 16px;

  &__select {
    width: 100%;
  }

  .sidebar.toggled &,
  .sidebar.toggled &__title,
  .sidebar.toggled &__line {
    display: none !important;
  }

  @media (max-width: 768px) {
    &,
    &__title {
      display: none;
    }
  }
}

.lesson-heading {
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* color: rgba(255, 255, 255, 0.4); */
  color: #00ff80;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    text-align: left;
  }

  .sidebar.toggled &__description {
    display: none;
  }

  .text-eprogramar-green {
    color: #00ff80 !important;
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
  props: [
    'currentCourse',
    'currentSection'
  ],
  beforeMount() {
    this.sectionsQuantity = this.currentCourse.sections.length;
  },
  methods: {
    toggleSidebar: toggleSidebar,
  },
  data() {
    sectionsQuantity: 0;
    console.log('sectionsQuantity', this.sectionsQuantity);
    return {
  //     another: {
  //       id: "5f8a262d0f64e8bc8a974c31",
  //       name: "Curso de Java para Iniciantes",
  //       tumbnail: "https://www.eprogramar.com.br/assets/images/slider-1.png",
  //       sections: [
  //           {
  //               id: "5f8a262d0f64e8bc8a974c32",
  //               name: "Setup",
  //               order: 1,
  //               contents: [
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c33",
  //                       description: "Instalação do Java",
  //                       value: "http://vimeo.com/eprogramar/java-install.mp4",
  //                       order: 1
  //                   },
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c34",
  //                       description: "Configuração do JAVA_HOME",
  //                       value: "http://vimeo.com/eprogramar/java-home.md",
  //                       order: 2
  //                   },
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c35",
  //                       description: "Instalação da IDE",
  //                       value: "http://vimeo.com/eprogramar/java-ide.mp4",
  //                       order: 3
  //                   }
  //               ]
  //           },
  //           {
  //               id: "5f8a262d0f64e8bc8a974c36",
  //               name: "POO - Programação Orientada a Objetos",
  //               order: 2,
  //               contents: [
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c37",
  //                       description: "POO - Classes",
  //                       value: "http://vimeo.com/eprogramar/poo-classes.mp4",
  //                       order: 1
  //                   },
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c38",
  //                       description: "POO - Métodos",
  //                       value: "http://vimeo.com/eprogramar/poo-methods.md",
  //                       order: 2
  //                   },
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c39",
  //                       description: "POO - Encapsulamento",
  //                       value: "http://vimeo.com/eprogramar/poo-encapsulamento.mp4",
  //                       order: 3
  //                   },
  //                   {
  //                       type: "MOVIE",
  //                       id: "5f8a262d0f64e8bc8a974c3a",
  //                       description: "POO - UML",
  //                       value: "http://vimeo.com/eprogramar/poo-uml.md",
  //                       order: 4
  //                   }
  //               ]
  //           }
  //       ],
  //       createdAt: "2020-10-16T23:01:01.778Z",
  //       updatedAt: "2020-10-16T23:01:01.778Z"
  //     }
    }
  }
};
</script>