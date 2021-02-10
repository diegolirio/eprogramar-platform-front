<template>
  <v-app id="inspire">         
    <router-view />  
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    
  }),
  created() {
    this.$vuetify.theme.dark = localStorage.getItem('THEME_DARK') === 'true';
  }
};
</script>
<style scoped>
</style>