export default {
  data () {
    return {
      position: 'top-right'
    }
  },

  methods: {
    Notify (obj) {
      this.$q.notify(obj)
    },

    SuccessNotify (message = 'Sucesso na Requisição') {
      const successNotification = {
        message,
        color: 'secondary',
        position: this.position,
        icon: 'check_circle'
      }
      this.Notify(successNotification)
    },

    FailNotify (message = 'Falha na Requisição') {
      const failedNotification = {
        message,
        color: '#f44336',
        position: this.position,
        type: 'negative'
      }
      this.Notify(failedNotification)
    }
  }
}
