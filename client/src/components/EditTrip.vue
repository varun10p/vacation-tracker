
<template>
<v-layout column>
      <v-flex justify-sm-center>
        <v-container col-md-6 offset-md-3 >
              <v-text-field
                label="Where do you want to Go?"
                v-model="destination"
              ></v-text-field>
            <br>
            <div class="danger-alert" v-html="error"> {{error}}</div>
            <br>
            <v-btn class="cyan" @click="create"> Start a Trip </v-btn>
        </v-container>
      </v-flex>
    </v-layout>
</template>

<script>
import TripsService from '@/services/TripsService'

export default {
  data () {
    return {
      trip: {
        destination: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const fieldsArefilled = Object
        .keys(this.trip)
        .every(key => !!this.trip[key])
      if (!fieldsArefilled) {
        this.error = 'Please fill in all of the fields'
        return
      }

      try {
        await TripsService.post(this.trip)
        this.$router.push({
          name: 'trips'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
