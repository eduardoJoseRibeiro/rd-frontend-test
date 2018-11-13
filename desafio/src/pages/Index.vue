<template>
  <q-page class="flex flex-center">
    <table>
      <tbody>
        <tr v-for="user in users" :key="user.id.value">
          <td>
            <img :src="user.picture.thumbnail" alt="">
          </td>
          <td>
            {{ user.name.first }}
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ user.cell }}
          </td>
          <td>
            {{ user.location.city }} - {{ user.location.state }}
          </td>
          <td>
            <q-icon name="remove_circle"/>
          </td>
          <td>
            <q-icon name="reply"/>
          </td>
          <td>
            <q-icon name="save"/>
          </td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Index',

  data () {
    return {
      API_URL: 'https://randomuser.me/api/',
      users: {}
    }
  },

  created () {
    this.getUsers()
  },

  methods: {
    getUsers () {
      const URL = `${this.API_URL}?results=100`

      this.$axios
        .get(URL)
        .then(users => {
          this.users = users.data.results
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
