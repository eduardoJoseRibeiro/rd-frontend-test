<template>
  <!-- <table class="table"> -->
    <div style="min-width: 100%" class="table__full">
      <div
        v-for="(user, index) in users"
        :key="user.id.value"
        class="table__content row"
        v-if="user.id.value">
          <div class="col" @click="goUser(user.id.value, user)">
            <img :src="user.picture.thumbnail" alt="" class="table__content--img">
          </div>
          <div class="table__content--main capitalize col-2" @click="goUser(user.id.value, user)">
            {{ user.name.first }}
          </div>
          <div class="table__content--normal lowercase col-3" @click="goUser(user.id.value, user)">
            {{ user.email }}
          </div>
          <div class="table__content--normal col-2" @click="goUser(user.id.value, user)">
            {{ user.cell }}
          </div>
          <div class="table__content--normal capitalize col-2" @click="goUser(user.id.value, user)">
            {{ user.location.city }} - <span class="uppercase"> {{ user.location.state }} </span>
          </div>
          <div class="table__content--normal col-2">
            <div style="float: right;" class="row">
              <div @click="removeUser(index, user)">
                <q-icon name="delete"/>
              </div>
              <div @click="allUser(index, user)">
                <q-icon name="select_all"/>
              </div>
              <div @click="doneUser(index, user)">
                <q-icon name="done"/>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import Notify from '../mixins/Notify.js'
import { mapActions } from 'vuex'

export default {
  name: 'Card',

  mixins: [
    Notify
  ],

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
    ...mapActions({
      setRemovedUsers: 'user/setRemovedUsers',
      setAllUsers: 'user/setAllUsers',
      setDoneUsers: 'user/setDoneUsers',
      setUser: 'user/setUser'
    }),

    goUser (id, user) {
      this.setUser(user)
      this.$router.push({name: 'user', params: { id }})
    },

    removeUser (index, user) {
      const params = this.makeParams(index, user)
      this.setRemovedUsers(params)
      if (this.$route.name !== 'lixeira') {
        this.SuccessNotify(`${user.name.first} ${this.$t('success.removed')}`)
      } else {
        this.FailNotify(`${user.name.first} ${this.$t('alreadyRating')}`)
      }
    },

    allUser (index, user) {
      const params = this.makeParams(index, user)
      this.setAllUsers(params)
      if (this.$route.name !== 'todos') {
        this.SuccessNotify(`${user.name.first} ${this.$t('success.all')}`)
      } else {
        this.FailNotify(`${user.name.first} ${this.$t('alreadyRating')}`)
      }
    },

    doneUser (index, user) {
      const params = this.makeParams(index, user)
      this.setDoneUsers(params)
      if (this.$route.name !== 'atendidos') {
        this.SuccessNotify(`${user.name.first} ${this.$t('success.done')}`)
      } else {
        this.FailNotify(`${user.name.first} ${this.$t('alreadyRating')}`)
      }
    },

    makeParams (index, user) {
      return {
        index,
        user,
        route: this.$route.name
      }
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

.table__content--normal .q-icon {
  font-size: 1.3rem;
  margin-right: 1rem;
  &:hover {
    color: $secondary;
  }
}

.table__line {
  background-color: $primary;
  min-height: 3px;
}
</style>
