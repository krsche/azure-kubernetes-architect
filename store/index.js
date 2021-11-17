export const actions = {
  nuxtClientInit({ commit }, { req }) {
    console.log('[DEBUG] Hello from nuxtClientInit')

    if (sessionStorage.getItem('aks-decisions')) {
      commit('LOAD_DECISIONS')
    }
  }
}