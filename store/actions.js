export default {
  nuxtClientInit({ commit }, { req }) {
    console.log('[DEBUG] Hello from nuxtClientInit')

    if (sessionStorage.getItem('aks-decisions')) {
      commit('LOAD_DECISIONS')
    }
  },

  DEBUG_STORAGE () {
    console.log('index.js - debug()')
    console.log(JSON.parse(sessionStorage.getItem('aks-decisions')))
  }
}
