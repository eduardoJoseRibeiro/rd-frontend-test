<template>
  <q-page class="flex flex-center" padding>
    <my-card :users="users"/>
  </q-page>
</template>

<style>
</style>

<script>
import Card from 'components/Card'

import API from '../mixins/API'

import { mapActions } from 'vuex'

export default {
  name: 'Index',

  components: {
    'my-card': Card
  },

  mixins: [
    API
  ],

  data () {
    return {
      users: {},
      quantity: 50
    }
  },

  created () {
    this.getUsers(this.quantity)
  },

  methods: {
    ...mapActions({
      setUsers: 'user/setUsers'
    }),

    getUsers (quantity) {
      const URL = `${this.API_URL}?results=${quantity}`

      this.setUsers(quantity)

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
