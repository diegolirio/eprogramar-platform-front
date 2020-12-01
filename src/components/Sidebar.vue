<template>

  <ul v-if="currentCourse"
    class="navbar-nav bg-gradient-eprogramar sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    
    <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
      <img
        class="sidebar-brand-icon logo-sidebar"
        :src="currentCourse.tumbnail"
        alt="Logo do eprogramar"
      />
      <div class="sidebar-brand-text mx-3">{{currentCourse.name}}</div>
    </router-link>

    <hr class="sidebar-divider my-0" />

    <div class="lesson-heading">
      <div class="lesson-heading__description">
        <span class="section-font-size">{{sectionContentCurrent ? sectionContentCurrent.description : section.contents[0].description}}</span>
      </div>
      <!-- 
          TODO:  Quantidade de Modulos, aplicar a responsividade

      <div class="lesson-heading__number" v-if="currentCourse.sections">
        <small>Módulos</small>
        <span>{{currentCourse.sections.length}}</span>
      </div>
      -->
    </div>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading text-eprogramar-green">
      Conteúdo
    </div>

    <li class="nav-item" v-for="sectionContent in section.contents" :key="sectionContent.id">
      <a class="nav-link" v-on:click.prevent="setSectionContent(sectionContent)" href="#">
        <i class="far fa-fw fa-play-circle"></i>
        <span>{{sectionContent.description}}</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block other-modules__line" />

    <div class="sidebar-heading other-modules__title text-eprogramar-green">Módulos</div>

    <div class="other-modules">
      <select class="other-modules__select" v-on:change="setModule($event)">
        <option v-for="section in currentCourse.sections" 
                :key="section._id" :value="section._id" >
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

<script>
import { mapGetters } from "vuex";
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
    'currentCourse'
  ],
  methods: {
    toggleSidebar: toggleSidebar,
    setModule(event) {
      let currentSection = this.currentCourse.sections.filter(s => s._id === event.target.value)[0];
      this.$store.commit("sectionStore/setSection", currentSection);
      this.sectionContentCurrent = currentSection.contents[0];
    },
    setSectionContent(sectionContent) {
      this.sectionContentCurrent = sectionContent;
      const splited = sectionContent.value.split('/');      
      let videoId = splited[splited.length-1];
      this.$store.commit("videoStore/setVideo", videoId);
    }
  }, 
  data() {
    return {  
      sectionContentCurrent: null
    }
  },
  mounted: {
  },
  computed: {
    ...mapGetters({
      section: "sectionStore/section",
    })
  },   
} 
</script>


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
    height: 30px;
    background-color: #49007C !important;
    color: #00ff80;
    border: 1px solid #00ff80;
    border-radius: 4px;
  }

    &__select:active {
      border: 1px solid #00ff80 !important;
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
  .section-font-size {
    font-size: 14px;
  }
}
</style>
