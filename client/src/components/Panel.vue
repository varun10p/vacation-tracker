<template>
    <v-container col-md-6 offset-md-3 >
        <v-app-bar dense dark>
            <v-app-bar-title><b>{{title}}</b></v-app-bar-title>
        </v-app-bar>
        <slot>
        </slot>
    </v-container>
</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
