// Why is state constantly re-assigned?
// must replace for re-activity
// https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules

export default {
  /**
   * Load from Session Storage
   * @param {Observable} state
   */
  LOAD_DECISIONS (state) {
    console.log('[LOAD_DECISIONS]')
    state.decisions = JSON.parse(sessionStorage.getItem('aks-architect'))
  },

  SET_FORM (state, formCategories) {
    console.log('[SET_FORM]', formCategories)
    state.form = formCategories
    // console.log('Got state.form?')
    // console.log(JSON.stringify(state.form))
  },

  /**
   * Sync decision to session storage
   *
   * @param {Array|Observable?} state
   * @param {Object} decision
   * @param {Object} decision.answer
   * @param {Object} decision.question
   */
  UPDATE_DECISION (state, decision) {
    console.log('[UPDATE_DECISION]: sync state with sessionStorage')
    console.log(decision)
    const q = decision.question
    const a = decision.answer

    state.decisions = {
      ...state.decisions,
      [q.slug]: {
        id: a.id,
        stats: a.stats
      }
    }

    console.log(state.decisions)

    sessionStorage.setItem('aks-architect', JSON.stringify(state.decisions))
  },

  /**
   * Remove decision from state
   * re-sync with session storage
   *
   * @param {Array|Observable?} state
   * @param {Object} decision
   * @param {Object} decision.answer
   * @param {Object} decision.question
   */
  REMOVE_DECISION (state, decision) {
    console.log('[REMOVE_DECISION]: sync state with sessionStorage')

    const q = decision.question
    const copy = {...state.decisions}
    delete copy[q.slug]
    state.decisions = copy // re-assign for re-activity

    sessionStorage.setItem('aks-architect', JSON.stringify(state.decisions))
  },

  /**
   * Clear session storage
   *
   * @param {Array|Observable?} state
   */
  RESET_DATA (state) {
    console.log('[RESET_DATA]: clearing session storage')
    sessionStorage.clear()
  }
}
