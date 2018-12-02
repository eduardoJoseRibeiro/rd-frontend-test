<template>
  <q-layout view="hHh lpr lFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header style="box-shadow: none">
      <q-toolbar>
        <q-btn
          round
          dense
          push
          text-color="primary"
          color="white"
          icon="arrow_forward_ios"
          @click="$router.go(-1)"
          style="transform: rotate(180deg); padding-top: 5px; padding-left: 3px;"
        />
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="drawer" :width="0" :breakpoint="0">
      <div v-for="n in 50" :key="n">Drawer</div>
    </q-layout-drawer>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutUsers',
  data () {
    return {
      leftDrawer: false,
      drawer: false
    }
  }
}
</script>
