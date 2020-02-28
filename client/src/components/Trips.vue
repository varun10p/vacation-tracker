<template>
    <div>
        <v-container col-md-6 offset-md-3 >
        <panel title="Trips">
        </panel>
        <v-btn
            slot="action"
            :to="{
              name: 'trips-create'
            }"
            >
          <v-icon>Add Trip</v-icon>
          </v-btn>
          <div>
      <v-layout>
        <v-flex>
          <div class="song-title">
            <v-spacer> </v-spacer>
            <v-btn> India
          </v-btn>
          </div>
        </v-flex>
      </v-layout>
      </div>
        </v-container>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import TripsService from '@/services/TripsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      trips: null
    }
  },
  watch: {
    // request trips
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.trips = (await TripsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
</style>
