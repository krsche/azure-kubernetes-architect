import { addConsoleHandler } from "selenium-webdriver/lib/logging"

export default {
  LOAD_DECISIONS (state) {
    console.log('[LOAD_DECISIONS] hello world')
    state.decisions = JSON.parse(sessionStorage.getItem('aks-decisions'))
  },

  UPDATE_DECISION (state, decision) {
    console.log('mutation(REMOVE_DECISION): sync state with sessionStorage')
    const i = _findDecisionByQuestion(state, decision.question.slug)
    if (i === -1) {
      state.decisions.push(decision)
    } else {
      state.decisions[i].answer = decision.answer
    }

    sessionStorage.setItem('aks-decisions', JSON.stringify(state.decisions))
  },

  REMOVE_DECISION (state, decision) {
    console.log('mutation(REMOVE_DECISION): sync state with sessionStorage')
    const i = _findDecisionByQuestion(state, decision.question.slug)
    if (i !== -1) {
      state.decisions.splice(i, 1)
    }
    sessionStorage.setItem('aks-decisions', JSON.stringify(state.decisions))
  },

  DEBUG_STORAGE (state) {
    console.log('mutation(DEBUG_STORAGE): output current session')
    const current = sessionStorage.getItem('aks-decisions')
    console.log(JSON.parse(current))
  },

  RESET_DATA (state) {
    console.log('mutation(RESET_DATA): clearing session storage')
    sessionStorage.clear()
  }
}

const _findDecisionByQuestion = function (state, slug) {
  return state.decisions.findIndex(el => el.question.slug === slug)
}
