<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
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
      <q-tabs>
        <q-route-tab
          slot="title"
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-layout-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
