<template>
  <q-page padding>
    <h1>
      {{ id }}
    </h1>
  </q-page>
</template>

<script>
export default {
  name: 'User',

  data () {
    return {
      id: this.$route.params.userId
    }
  }
}
</script>

<style>
</style>
