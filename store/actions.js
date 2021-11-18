export default {
  nuxtClientInit({ commit }, { req }) {
    console.log('*** INIT ***')
    console.log('[DEBUG] Hello from nuxtClientInit')

    if (sessionStorage.getItem('aks-decisions')) {
      commit('LOAD_DECISIONS')
    }
  },

  DEBUG_STORAGE () {
    const data = JSON.parse(sessionStorage.getItem('aks-decisions'))
    console.log(`[DEBUG_STORAGE] ${data.length} decisions`)
    console.log(data)
  }
}
