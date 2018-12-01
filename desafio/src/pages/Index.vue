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

import { mapActions, mapGetters } from 'vuex'

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

    ...mapGetters({
      GET_USERS: 'user/GET_USERS'
    }),

    getUsers (quantity) {
      this.setUsers(quantity)
        .then(() => { this.users = this.GET_USERS() })
        .catch(error => console.error(error))
    }
  }
}
</script>
