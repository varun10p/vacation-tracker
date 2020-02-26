<template>
  <div id="app">
    <PageHeader />
    <v-app>
        <v-container fluid></v-container>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #118dbe;
  margin-top: 60px;
}
</style>
