<template>
  <q-layout view="hHh Lpr lFf" style="background-color: whitesmoke">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
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
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
@import "~variables";

.router-link-exact-active.router-link-active.q-link,
.router-link-exact-active.router-link-active.q-link .q-icon {
  background: transparent;
  color: $secondary;
}

.router-link-exact-active.router-link-active.q-link {
  font-weight: bold;
}

.q-layout-drawer {
  max-width: 200px;
}

.q-layout-page-container {
  padding-left: 230px!important;
}
</style>
