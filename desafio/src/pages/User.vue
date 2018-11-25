<template>
  <q-page class="background__secondary">
    <div class="background__primary"></div>
    <div class="background__info">
      <div class="background__info--top">
        <div class="user__image--support">
          <img :src="user.picture ? user.picture.large : ''" alt="" class="user__image">
        </div>
      </div>
      <div class="background__info--middle">
        <p class="text-weight-regular">
          {{ message }}
        </p>
        <h3 class="capitalize text-weight-medium">
          {{ user.name ? user.name.first : '' }} {{ user.name ? user.name.last : '' }}
        </h3>
      </div>
      <div class="icons">
        <div @mouseover="selectInfo(INFO_NAME)">
          <q-icon name="person_outline" :class="isActive(INFO_NAME)"/>
        </div>
        <div @mouseover="selectInfo(INFO_EMAIL)">
          <q-icon name="email" :class="isActive(INFO_EMAIL)"/>
        </div>
        <div @mouseover="selectInfo(INFO_BIRTHDAY)" >
          <q-icon name="calendar_today" :class="isActive(INFO_BIRTHDAY)"/>
        </div>
        <div @mouseover="selectInfo(INFO_ADDRESS)">
          <q-icon name="location_on" :class="isActive(INFO_ADDRESS)"/>
        </div>
        <div @mouseover="selectInfo(INFO_TEL)">
          <q-icon name="phone" :class="isActive(INFO_TEL)"/>
        </div>
        <div @mouseover="selectInfo(INFO_PASS)">
          <q-icon name="vpn_key" :class="isActive(INFO_PASS)"/>
        </div>
      </div>
      <!-- <p>
        {{ user }}
      </p> -->
    </div>
  </q-page>
</template>

<script>
import API from '../mixins/API'

export default {
  name: 'User',

  mixins: [
    API
  ],

  data () {
    return {
      id: this.$route.params.id,
      user: {},
      message: 'Hi, My name is',
      INFO_NAME: 'name',
      INFO_EMAIL: 'email',
      INFO_BIRTHDAY: 'birthday',
      INFO_ADDRESS: 'address',
      INFO_TEL: 'tel',
      INFO_PASS: 'pass',
      activeIcon: 'name'
    }
  },

  created () {
    this.getUser(this.id)
  },

  methods: {
    getUser (id) {
      const URL = `${this.API_URL}?id=${id}`
      this.$axios
        .get(URL)
        .then(user => {
          this.user = user.data.results[0]
        })
        .catch(error => {
          console.error(error)
        })
    },

    selectInfo (info) {
      this.isEqualInfo(info, this.INFO_NAME)
      this.isEqualInfo(info, this.INFO_EMAIL)
      this.isEqualInfo(info, this.INFO_BIRTHDAY)
      this.isEqualInfo(info, this.INFO_ADDRESS)
      this.isEqualInfo(info, this.INFO_TEL)
      this.isEqualInfo(info, this.INFO_PASS)
    },

    isEqualInfo (info, infoElement) {
      if (info === infoElement) this.activeIcon = infoElement
    },

    isActive (info) {
      return info === this.activeIcon ? {active: true} : ''
    }
  }
}
</script>

<style lang="stylus">
@import "~variables";

$suaveBackground = #f4f4f4;
$borderRadius = 5px;
$sizeInfoTop = 10vh;

$introdutionContentColor = #9b9b9b;
$contentColor = #4e4e4e;

.background__primary {
  background-color: $primary;
  min-height: 40vh;
}

.background__secondary {
  background-color: $suaveBackground;
}

.background__info {
  width: 50vw;
  position: absolute;
  right: 25vw;
  top: 5vh;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(171,171,171,1);
  border-radius: $borderRadius 0 $borderRadius $borderRadius;
  @media screen and (max-width: 400px){
    width: 90vw;
    right: 5vw;
  }
}

.background__info--top {
  background-color: #f2f2f2;
  min-height: $sizeInfoTop;
  border-radius: $borderRadius 0 0 0;
  border-bottom: 2px solid #dfdfdf;
  padding-top: 5vh;
}

.user__image--support,
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user__image {
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 1px #a3a3a3;
  margin-bottom: -10vh;
  width: 160px;
}

.background__info--middle {
  margin-top: 15vh;
  p,
  h3 {
    text-align: center;
  }
  p {
    color: $introdutionContentColor;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
    color: $contentColor;
  }
}

.icons {
  margin-bottom: 5rem;
}

.icons .material-icons {
  font-size: 3rem;
  margin-right: 1.5rem;
  color: #cfcfcf;
}

.icons .active {
  color: #b3c02b;
}
</style>
