<template>
  <q-page padding>
    <p>
      {{ user }}
    </p>
  </q-page>
</template>

<script>
import API from '../mixins/API'

export default {
  name: 'User',

  mixins: [
    API
  ],

  data () {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },

  created () {
    this.getUser(this.id)
  },

  methods: {
    getUser (id) {
      const URL = `${this.API_URL}?id=${id}`
      this.$axios
        .get(URL)
        .then(user => {
          this.user = user.data.results[0]
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style>
</style>
