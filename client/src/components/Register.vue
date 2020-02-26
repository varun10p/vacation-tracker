<template>
    <v-layout column>
      <v-flex justify-sm-center>
        <v-container col-md-6 offset-md-3 >
          <v-app-bar dense dark>
            <v-app-bar-title><b>Register</b></v-app-bar-title>
          </v-app-bar>
          <div>
            <form
            name="register-form"
            autocomplete="off">
              <v-text-field
                label="Email"
                v-model="email"
              ></v-text-field>
                <br>
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
              <v-text-field
                label="Phonenumber"
                v-model="phonenumber"
                placeholder="XXX-YYY-ZZZ"
              ></v-text-field>
                <br>
              <v-text-field
                label="Birthdate"
                v-model="birthdate"
                placeholder="XX/YY"
              ></v-text-field>
                <br>
              <v-text-field
                label="Birthyear"
                v-model="birthyear"
                placeholder="Example 2000"
              ></v-text-field>
            </form>
            <br>
            <div class="danger-alert" v-html="error" />
            <br>
            <v-btn class="cyan" @click="register"> Register </v-btn>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password,
          phonenumber: this.phonenumber,
          birthdate: this.birthdate,
          birth_year: this.birthyear
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
