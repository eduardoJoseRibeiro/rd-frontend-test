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
      // users: {},
      quantity: 50
    }
  },

  created () {
    this.getUsers(this.quantity)
  },

  computed: {
    users () {
      return this.GET_FILTERED_USERS()
    }
  },

  methods: {
    ...mapActions({
      setUsers: 'user/setUsers'
    }),

    ...mapGetters({
      GET_USERS: 'user/GET_USERS',
      GET_FILTERED_USERS: 'user/GET_FILTERED_USERS'
    }),

    getUsers (quantity) {
      this.setUsers(quantity)
        .then(() => { console.log(this.GET_FILTERED_USERS()) })
        .catch(error => console.error(error))
    }
  }
}
</script>
