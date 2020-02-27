<template>
    <div>
        <v-container col-md-6 offset-md-3 >
        <panel title="Trips">
        </panel>
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
  async mounted () {
    // request trips
    this.trips = await TripsService.index()
  }
}
</script>

<style scoped>
</style>
