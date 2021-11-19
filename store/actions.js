export default {
  nuxtClientInit({ commit }, { req }) {
    console.log('[nuxtClientInit] Hello World, debug store…')
    // console.log(store)

    // if (sessionStorage.getItem('aks-architect')) {
    //   commit('LOAD_DECISIONS')
    // }
  },

  // debugForm () {
  //   const decisions = JSON.parse(sessionStorage.getItem('aks-architect'))
  //   console.log(`[DEBUG_FORM] ${decisions.length} decisions`)
  //   console.log(decisions)
  // },

  debugStorage () {
    const decisions = JSON.parse(sessionStorage.getItem('aks-architect'))
    console.log(`[DEBUG_STORAGE] ${decisions.length} decisions`)
    console.log(decisions)
  }
}
