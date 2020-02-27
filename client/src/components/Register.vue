<template>
    <v-layout column>
      <v-flex justify-sm-center>
        <v-container col-md-6 offset-md-3 >
          <panel title="Register">
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
          </panel>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
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
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
