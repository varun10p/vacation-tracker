<template>
    <v-layout column>
      <v-flex justify-sm-center>
        <v-container col-md-6 offset-md-3 >
          <v-toolbar dense >
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div>
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
              v-model="passowrd"
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
              label="Birthmonth"
              v-model="phonenumber"
              placeholder="XX/YY"
            ></v-text-field>
              <br>
            <v-text-field
              label="Birthmonth"
              v-model="phonenumber"
              placeholder="Example 2000"
            ></v-text-field>
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
      passowrd: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          birthdate: this.birthdate,
          birth_year: this.birthyear,
          phonenumber: this.phonenumber,
          username: this.username
        })
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
