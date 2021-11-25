export default {

  /**
   * After page loads, check if there are existing decisions
   * in browser sessionStorage. If so, dispatch LOAD_DECSISIONs.
   */
  nuxtClientInit ({ commit }, { req }) {
    console.log('[action] nuxtClientInit()')

    if (sessionStorage.getItem('decisions')) {
      commit('LOAD_DECISIONS')
    }
  }
}
