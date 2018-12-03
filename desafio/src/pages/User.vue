<template>
  <q-page class="background__secondary">
    <div class="background__primary"></div>
    <div class="background__info">
      <div class="background__info--top">
        <div class="user__image--support">
          <img :src="hasInfo(user.picture, 'large')" alt="" class="user__image">
        </div>
      </div>
      <div class="background__info--middle">
        <p class="text-weight-regular" style="font-size: 1.2rem">
          {{ info }}
        </p>
        <h3 :class="isCapitilize([INFO_NAME, INFO_ADDRESS])" style="font-size: 2rem">
          {{ message }}
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
    </div>
  </q-page>
</template>

<script>
import API from '../mixins/API'
import moment from 'moment'

import { mapGetters } from 'vuex'

export default {
  name: 'User',

  mixins: [
    API
  ],

  data () {
    return {
      id: this.$route.params.id,
      user: {},
      message: this.$t('myName'),
      info: '',
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
      .then(() => {
        const info = this.$t('myName') // 'Hi, My name is'
        const message = this.hasInfo(this.user.name, 'first') + ' ' + this.hasInfo(this.user.name, 'last')
        const icon = this.INFO_NAME

        this.changeMessageAndInfo(message, info, icon)
      })
      .catch(error => {
        console.error(error)
      })
  },

  methods: {
    ...mapGetters({
      GET_USER: 'user/GET_USER'
    }),

    getUser (id) {
      const hasUser = Object.keys(this.GET_USER()).length !== 0

      return new Promise((resolve, reject) => {
        if (hasUser) {
          this.user = this.GET_USER()
          resolve()
        } else {
          const URL = `${this.API_URL}?id=${id}`
          this.$axios
            .get(URL)
            .then(user => {
              this.user = user.data.results[0]
              resolve()
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    },
    /**
     * @name selectInfo
     * @description Executado na hora que o usuário passa o mouse em cima do icone
     */
    selectInfo (info) {
      const INFOS_ELEMENTS = [
        this.INFO_NAME,
        this.INFO_EMAIL,
        this.INFO_BIRTHDAY,
        this.INFO_ADDRESS,
        this.INFO_TEL,
        this.INFO_PASS
      ]

      INFOS_ELEMENTS.forEach(INFO_ELEMENT => this.isEqualInfo(info, INFO_ELEMENT))
    },

    isEqualInfo (info, infoElement) {
      if (info === infoElement) {
        const DADOS = this.compareMessageAndInfo(this.user, infoElement)[0]
        this.changeMessageAndInfo(DADOS.message, DADOS.info, DADOS.name)
      }
    },

    isActive (info) {
      return info === this.activeIcon ? {active: true} : ''
    },

    isCapitilize (infos) {
      const CAPITALIZE = infos.some(info => info === this.activeIcon)

      return CAPITALIZE
        ? {capitalize: true, 'text-weight-medium': true}
        : {'text-weight-medium': true}
    },

    isActiveInfo (info) {
      return info === this.activeIcon
    },

    /**
     * @name hasInfo
     * @description
     * @param info
     * @param prop
     * @returns {type of prop}
     */
    hasInfo (info, prop = false) {
      if (prop) return info ? info[prop] : ''
      else return info || ''
    },

    compareMessageAndInfo (USER, NAME_INFO) {
      const itemsActive = [
        {
          name: this.INFO_NAME,
          message: this.hasInfo(USER.name, 'first') + ' ' + this.hasInfo(USER.name, 'last'),
          info: this.$t('myName') // 'Hi, My name is'
        },
        {
          name: this.INFO_EMAIL,
          message: this.hasInfo(USER.email),
          info: this.$t('myEmail') // 'My email address is'
        },
        {
          name: this.INFO_BIRTHDAY,
          message: moment(this.hasInfo(USER.dob, 'date')).format('DD/MM/YYYY'),
          info: this.$t('myBirthday') // 'My birthday is'
        },
        {
          name: this.INFO_ADDRESS,
          message: this.hasInfo(USER.location, 'street'),
          info: this.$t('myAddress') // 'My address is'
        },
        {
          name: this.INFO_TEL,
          message: this.hasInfo(USER.phone),
          info: this.$t('myPhone') // 'My phone number is'
        },
        {
          name: this.INFO_PASS,
          message: this.hasInfo(USER.login, 'password'),
          info: this.$t('myPass') // 'My password is'
        }
      ]

      return itemsActive.filter(item => item.name === NAME_INFO)
    },

    /**
     * @name changeMessageAndInfo
     * @description Recebe a mensagem, info e icone, e atualizam as respectivas propriedades globais
     * @param message
     * @param info
     * @param icon
     * @returns {void}
     */
    changeMessageAndInfo (message, info, icon = false) {
      this.message = message
      this.info = info
      if (icon) this.activeIcon = icon
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
