<template>
  <table class="table">
    <tbody>
      <tr v-for="user in users" :key="user.id.value" class="table__content">
        <td>
          <img :src="user.picture.thumbnail" alt="" class="table__content--img">
        </td>
        <td class="table__content--main capitalize">
          {{ user.name.first }}
        </td>
        <td class="table__content--normal lowercase">
          {{ user.email }}
        </td>
        <td class="table__content--normal">
          {{ user.cell }}
        </td>
        <td class="table__content--normal capitalize">
          {{ user.location.city }} - <span class="uppercase"> {{ user.location.state }} </span>
        </td>
        <td class="table__content--normal">
          <q-icon name="remove_circle"/>
        </td>
        <td class="table__content--normal">
          <q-icon name="reply"/>
        </td>
        <td class="table__content--normal">
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
      required: true
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="stylus">
@import '~variables'

$backHover = #f9f9f9;

.table {
  border-radius: 10px;
  background-color: white;
}

.table__content {
  cursor: pointer;
  &:hover {
    background-color: $backHover;
    border-color: $backHover;
  }
}

.table__content--img {
  border-radius: 50%;
  width: 40px;
}

.table__content--main {
  color: $primary;
  font-weight: bold;
}

.table__content--normal {
  color: $quaternary;
}
</style>
