<template>
<div>
  <h1>Register</h1>
  <input type="email"
    name="email"
    v-model="email"
    placeholder="email"/>
  <br>
  <input type="username"
    name="username"
    v-model="username"
    placeholder="username"/>
    <br>
  <input type="password"
    name="password"
    v-model="password"
    placeholder="password"/>
    <br>
  <input type="phonenumber"
    name="phonenumber"
    v-model="phonenumber"
    placeholder="phonenumber"/>
    <br>
  <input type="birthdate"
    name="birthdate"
    v-model="birthdate"
    placeholder="birthdate"/>
    <br>
  <input type="birthyear"
    name="birthyear"
    v-model="birthyear"
    placeholder="birthyear"/>
    <br>
    <button
       @click="register">
       Register
    </button>
</div>
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
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
        birthdate: this.birthdate,
        birth_year: this.birthyear,
        phonenumber: this.phonenumber,
        username: this.username
      })
    }
  }
}
</script>

<style scoped>

</style>
