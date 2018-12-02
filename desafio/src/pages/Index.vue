<template>
  <q-page class="flex" padding style="min-height: none">
    <my-card :users="users"/>
    <div v-if="Object.keys(users).length === 0" class="table__full withoutUser">
      <h2>
        {{ messageWithoutUser }}
      </h2>
    </div>
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
      quantity: 50
    }
  },

  created () {
    this.getUsers(this.quantity)
  },

  computed: {
    users () {
      switch (this.$route.name) {
        case 'todos':
          return this.GET_FILTERED_USERS()
        case 'lixeira':
          return this.GET_REMOVED_USERS()
      }
    },

    messageWithoutUser () {
      if (Object.keys(this.users).length === 0 && this.GET_IS_INIT()) return 'Carregando...'
      return 'Nenhum Usuário Encontrado!'
    }
  },

  methods: {
    ...mapActions({
      setUsers: 'user/setUsers'
    }),

    ...mapGetters({
      GET_FILTERED_USERS: 'user/GET_FILTERED_USERS',
      GET_REMOVED_USERS: 'user/GET_REMOVED_USERS',
      GET_IS_INIT: 'user/GET_IS_INIT'
    }),

    getUsers (quantity) {
      this.setUsers(quantity)
    }
  }
}
</script>
<style lang="stylus">
@import "~variables"

.q-layout-page.flex.layout-padding {
  min-height: 0!important;
}
.withoutUser {
  text-align: center;
  color: $primary;
}
</style>
