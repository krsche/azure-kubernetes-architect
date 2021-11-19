export default {
  nuxtClientInit({ commit }, { req }) {
    console.log('[nuxtClientInit] Hello World, debug store…')
    // console.log(store)

    // if (sessionStorage.getItem('aks-decisions')) {
    //   commit('LOAD_DECISIONS')
    // }
  },

  // debugForm () {
  //   const decisions = JSON.parse(sessionStorage.getItem('aks-decisions'))
  //   console.log(`[DEBUG_FORM] ${decisions.length} decisions`)
  //   console.log(decisions)
  // },

  debugStorage () {
    const decisions = JSON.parse(sessionStorage.getItem('aks-decisions'))
    console.log(`[DEBUG_STORAGE] ${decisions.length} decisions`)
    console.log(decisions)
  }
}
