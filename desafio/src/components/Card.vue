<template>
  <table class="table">
    <tbody>
      <!-- Por algum motivo, existe usuários que não possuem ID, devido a isso eu criei o v-if -->
      <tr
        v-for="user in users"
        :key="user.id.value"
        class="table__content"
        @click="goUser(user.id.value)"
        v-if="user.id.value">
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
  },

  methods: {
    goUser (id) {
      this.$router.push({name: 'user', params: { id }})
    }
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

.table__line {
  background-color: $primary;
  min-height: 3px;
}
</style>
