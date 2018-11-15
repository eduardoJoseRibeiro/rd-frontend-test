<template>
  <q-page class="background__secondary">
    <div class="background__primary"></div>
    <div class="background__info">
      <div class="background__info--top">
        <div class="user__image--support">
          <img :src="user.picture.large" alt="" class="user__image">
        </div>
      </div>
      <div class="background__info--middle">
        <p class="text-weight-regular">
          {{ message }}
        </p>
        <h3 class="capitalize text-weight-medium">
          {{ user.name.first }} {{ user.name.last }}
        </h3>
      </div>
      <p>
        {{ user }}
      </p>
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
      message: 'Hi, My name is'
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

.user__image--support {
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
</style>
