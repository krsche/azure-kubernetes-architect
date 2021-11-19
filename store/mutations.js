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

    state.decisions[q.slug] = {
      id: a.id,
      stats: a.stats
    }

    // const i = _findDecisionByQuestion(state, decision.question.slug)
    // if (i === -1) {
    //   state.decisions.push(decision)
    // } else {
    //   state.decisions[i].answer = decision.answer
    // }
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
    delete state.decisions[q.slug]

    // const i = _findDecisionByQuestion(state, decision.question.slug)
    // if (i !== -1) {
    //   state.decisions.splice(i, 1)
    // }
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

// =========
//  Helpers
// =========

/**
 * Look for decision by Question
 *
 * @param {Array} state
 * @param {String} slug
 * @returns {Integer} index of matched element, -1 if not found
 */
const _findDecisionByQuestion = function (state, slug) {
  return state.decisions.findIndex(el => el.question.slug === slug)
}
