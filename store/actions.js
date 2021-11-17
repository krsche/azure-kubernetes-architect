export default {
  nuxtClientInit({ commit }, { req }) {
    console.log('*** INIT ***')
    console.log('[DEBUG] Hello from nuxtClientInit')

    if (sessionStorage.getItem('aks-decisions')) {
      commit('LOAD_DECISIONS')
    }
  },

  DEBUG_STORAGE () {
    console.log('---')
    const data = JSON.parse(sessionStorage.getItem('aks-decisions'))
    console.log(`[STORAGE] decisions made: ${data.length}`)
    console.log(data)
    console.log('---')
  }
}
