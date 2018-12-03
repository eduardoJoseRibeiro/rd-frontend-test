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
            :placeholder="$t('search')"
            @input="filterUsers">
            <q-autocomplete
              @search="autocomplete"
            />
          </q-search>
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
          <q-item-main :label="$t('all')"/>
        </q-item>
        <q-item :to="{name: 'atendidos'}">
          <q-item-side icon="done_all" />
          <q-item-main :label="$t('done')"/>
        </q-item>
        <q-item :to="{name: 'lixeira'}">
          <q-item-side icon="delete_sweep"/>
          <q-item-main :label="$t('removed')"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <q-infinite-scroll :handler="loadMore">
        <router-view />
        <q-spinner-dots slot="message" :size="40" style="margin-left: 47%;"></q-spinner-dots>
      </q-infinite-scroll>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL, QSearch, QSpinner, QSpinnerDots, QAutocomplete } from 'quasar'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyLayout',

  components: {
    QSearch,
    QSpinner,
    QSpinnerDots,
    QAutocomplete
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      search_term: ''
    }
  },

  computed: {
    rota () {
      return this.$route.name || ''
    }
  },

  watch: {
    rota: {
      handler: function (value) {
        switch (value) {
          case 'todos':
            this.setRawFilter(this.GET_USERS())
            break
          case 'lixeira':
            this.setRawFilter(this.GET_REMOVED_USERS())
            break
          case 'atendidos':
            this.setRawFilter(this.GET_DONE_USERS())
            break
          case 'home':
            this.$router.push({name: 'todos'})
        }
      }
    }
  },

  methods: {
    openURL,

    ...mapActions({
      setFilterUsers: 'user/setFilterUsers',
      setRawFilter: 'user/setRawFilter',
      setUsers: 'user/setUsers',
      setTermSearch: 'user/setTermSearch'
    }),

    ...mapGetters({
      GET_USERS: 'user/GET_USERS',
      GET_REMOVED_USERS: 'user/GET_REMOVED_USERS',
      GET_DONE_USERS: 'user/GET_DONE_USERS',
      GET_TERM_SEARCH: 'user/GET_TERM_SEARCH'
    }),

    filterUsers () {
      const params = {
        term: this.search_term
      }

      switch (this.$route.name) {
        case 'todos':
          params.users = this.GET_USERS()
          break
        case 'lixeira':
          params.users = this.GET_REMOVED_USERS()
          break
        case 'atendidos':
          params.users = this.GET_DONE_USERS()
          break
      }
      this.setFilterUsers(params)
      this.setTermSearch(this.search_term)
    },

    selectUser () {
      switch (this.$route.name) {
        case 'todos':
          return this.GET_USERS()
        case 'lixeira':
          return this.GET_REMOVED_USERS()
        case 'atendidos':
          return this.GET_DONE_USERS()
      }
    },

    loadMore (index, done) {
      console.log('Carregando Mais')
      setTimeout(() => {
        this.setUsers(50)
        done()
      }, 200)
    },

    autocomplete (term, done) {
      const lastSearch = this.GET_TERM_SEARCH()
      let exp = new RegExp(term.trim(), 'i')

      let matches = lastSearch.filter(search => {
        return exp.test(search)
      })

      matches = matches.map(search => {
        return {
          value: search,
          label: search
        }
      })

      done(matches)
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
