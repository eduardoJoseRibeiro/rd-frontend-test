<template>
  <!-- <table class="table"> -->
    <div style="min-width: 100%" class="table__full">
      <div
        v-for="user in users"
        :key="user.id.value"
        class="table__content row"
        @click="goUser(user.id.value)"
        v-if="user.id.value">
          <div class="col">
            <img :src="user.picture.thumbnail" alt="" class="table__content--img">
          </div>
          <div class="table__content--main capitalize col-2">
            {{ user.name.first }}
          </div>
          <div class="table__content--normal lowercase col-3">
            {{ user.email }}
          </div>
          <div class="table__content--normal col-2">
            {{ user.cell }}
          </div>
          <div class="table__content--normal capitalize col-3">
            {{ user.location.city }} - <span class="uppercase"> {{ user.location.state }} </span>
          </div>
          <div class="table__content--normal col">
            <q-icon name="remove_circle"/>
            <q-icon name="reply"/>
            <q-icon name="save"/>
          </div>
      </div>
    </div>
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
    return {
      columns: [
        {
          field: ''
        }
      ]
    }
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

.table__full {
  border-radius: 5px;
  background-color: white;
  min-width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(171,171,171,1);
}

.table__content {
  cursor: pointer;
  border-bottom: 2px solid #e0e0e0;
  padding: 10px;
  padding-left: 20px;
  &:hover {
    background-color: $backHover;
  }
}

.table__content--img {
  border-radius: 50%;
  width: 40px;
}

.table__content--main {
  color: $primary;
  font-size: 1.3rem;
  font-weight: 500;
  padding-top: 8px;
}

.table__content--normal {
  color: $quaternary;
  padding-top: 12px;
}

.table__line {
  background-color: $primary;
  min-height: 3px;
}
</style>
