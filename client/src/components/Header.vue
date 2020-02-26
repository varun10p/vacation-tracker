<template>
    <v-app-bar dense dark>
      <v-app-bar-title>
        <span
        class="home"
        @click="navigateTo({name: 'root'})">
        Vacation Tracker
        </span>
      </v-app-bar-title>
        <v-app-bar-items>
          <v-btn flat dark>Trips
          </v-btn>
          <v-btn flat dark>Files
          </v-btn>
        </v-app-bar-items>
        <v-spacer></v-spacer>
        <v-app-bar-items>
          <v-btn flat dark v-if="!$store.state.loginStatus"
            @click="navigateTo({name: 'login'})">Login
              </v-btn>
            <v-btn flat dark v-if="!$store.state.loginStatus"
            @click="navigateTo({name: 'register'})">Sign Up
              </v-btn>
          <v-spacer></v-spacer>
        </v-app-bar-items>
    </v-app-bar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.home {
  cursor:pointer;
}
</style>
