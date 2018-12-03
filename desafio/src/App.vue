<template>
  <div id="q-app">
    <q-ajax-bar color="secondary" size="3px"/>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  created () {
    let linguaUsuario = this.$q.i18n.getLocale()
    // Traduz os componentes padrões do QUASAR
    import(`quasar-framework/i18n/${linguaUsuario}`)
      .then(lang => {
        this.$q.i18n.set(lang.default)
      })
    // Traduz minha aplicação
    import(`./i18n/${linguaUsuario}`)
      .then(lang => {
        this.$i18n.locale = linguaUsuario
      })
      .catch(() => {
        this.$i18n.locale = 'pt-br'
      })
  }
}
</script>

<style>
</style>
