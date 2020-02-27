<template>
    <div>
        <v-container col-md-6 offset-md-3 >
        <panel title="Files">
        </panel>
        </v-container>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import FilesService from '@/services/FilesService'
export default {
  components: {
    Panel
  },
  async mounted () {
    // request trips
    this.files = await FilesService.index()
  }
}
</script>

<style scoped>
</style>
