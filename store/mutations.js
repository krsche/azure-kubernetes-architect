import { addConsoleHandler } from "selenium-webdriver/lib/logging"

export default {
  LOAD_DECISIONS (state) {
    console.log('[LOAD_DECISIONS] hello world')

    state.decisions = JSON.parse(sessionStorage.getItem('aks-decisions'))
  },

  UPDATE_DECISION (state, decision) {
    // console.log(`Existing Decisions ${state.decisions.length}`, state.decisions)

    const i = _findDecisionByQuestion(state, decision.question.slug)
    if (i === -1) {
      state.decisions.push(decision)
    } else {
      state.decisions[i].answer = decision.answer
    }


    // console.log(state.decisions)
    // console.log(JSON.stringify(state.decisions))
    sessionStorage.setItem('aks-decisions', JSON.stringify(state.decisions))
  },

  REMOVE_DECISION (state, decision) {
    const i = _findDecisionByQuestion(state, decision.question.slug)
    if (i !== -1) {
      state.decisions.splice(i, 1)
    }
    sessionStorage.setItem('aks-decisions', JSON.stringify(state.decisions))
  },

  DEBUG_STORAGE (state) {
    console.log('hello from debugStorage()');
    const foo = sessionStorage.getItem('aks-decisions')
    console.log(JSON.parse(foo))
    // return foo
  }
}

// force ADO to rebuild 🙄

const _findDecisionByQuestion = function (state, slug) {
  return state.decisions.findIndex(el => el.question.slug === slug)
}

// const _debugStorage () {

// }