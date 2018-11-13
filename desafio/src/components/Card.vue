<template>
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
</template>

<script>
export default {
  name: 'Card',

  props: {
    users: {
      type: Array,
      required: true
    }
  },

  data () {
    return {}
  }
}
</script>

<style>
</style>
