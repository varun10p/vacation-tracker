<template>
    <v-layout column>
      <v-flex justify-sm-center>
        <v-container col-md-6 offset-md-3 >
          <v-app-bar dense dark>
            <v-app-bar-title><b>Login</b></v-app-bar-title>
          </v-app-bar>
          <div>
            <v-text-field
              label="Username"
              v-model="username"
            ></v-text-field>
              <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
            <br>
            <div class="danger-alert" v-html="error" />
            <br>
            <v-btn class="cyan" @click="login"> Login </v-btn>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setToken', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
