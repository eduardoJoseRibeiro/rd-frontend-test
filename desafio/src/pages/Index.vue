<template>
  <q-page class="flex flex-center" padding>
    <my-card :users="users"/>
  </q-page>
</template>

<style>
</style>

<script>
import Card from 'components/Card'

export default {
  name: 'Index',

  components: {
    'my-card': Card
  },

  data () {
    return {
      API_URL: 'https://randomuser.me/api/',
      users: {},
      quantity: 50
    }
  },

  created () {
    this.getUsers(this.quantity)
  },

  methods: {
    getUsers (quantity) {
      const URL = `${this.API_URL}?results=${quantity}`

      this.$axios
        .get(URL)
        .then(users => {
          this.users = users.data.results
          console.log(this.users)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
