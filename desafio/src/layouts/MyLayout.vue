<template>
  <q-layout view="hHh Lpr lFf" style="background-color: whitesmoke">
    <q-layout-header>
      <q-toolbar
        color="primary"
        class="row"
      >

        <img
          src="assets/zup1.png"
          alt="Logo da empresa Zup"
          style="width: 75px; margin-top: 5px"
          class="col-1">

        <div class="col-2"></div>

        <div class="col-7">
          <q-search
            v-model="search_term"
            class="search"
            clearable
            placeholder="Buscar"
            @input="filterUsers"/>
        </div>

        <div class="col-2"></div>

        <div class="col-1">
          <q-icon
            name="account_circle"
            style="font-size: 2.4rem;"/>
        </div>

      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'white' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item :to="{name: 'todos'}">
          <q-item-side icon="select_all"/>
          <q-item-main label="Todos"/>
        </q-item>
        <q-item :to="{name: 'atendidos'}">
          <q-item-side icon="done_all" />
          <q-item-main label="Atendidos"/>
        </q-item>
        <q-item :to="{name: 'lixeira'}">
          <q-item-side icon="delete_sweep"/>
          <q-item-main label="Lixeira"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL, QSearch } from 'quasar'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyLayout',

  components: {
    QSearch
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      search_term: ''
    }
  },

  methods: {
    openURL,

    ...mapActions({
      setFilterUsers: 'user/setFilterUsers'
    }),

    ...mapGetters({
      GET_USERS: 'user/GET_USERS'
    }),

    filterUsers () {
      const params = {
        term: this.search_term,
        users: this.GET_USERS()
      }
      this.setFilterUsers(params)
    }
  }
}
</script>

<style lang="stylus">
@import "~variables";

.q-link.q-item.q-item-link,
.q-link.q-item.q-item-link .q-icon {
  font-weight: 300;
  font-size: 1.3rem;
  color: #6f6f6f;
}

.router-link-exact-active.router-link-active.q-link,
.router-link-exact-active.router-link-active.q-link .q-icon {
  background: transparent;
  color: $secondary;
}

.router-link-exact-active.router-link-active.q-link {
  font-weight: 500;
}

.q-layout-drawer {
  max-width: 200px;
}

.q-layout-page-container {
  padding-left: 230px!important;
}

.search {
  background-color: white!important;
  border-radius: 20px;
  padding: 5px;
  color: $primary;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 10px;

  .q-icon,
  .q-icon:focus {
    color: $secondary;
    font-weight: bold;
  }
}

.q-if:before {
  border-bottom: none;
}
</style>
