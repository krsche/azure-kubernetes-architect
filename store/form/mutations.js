export default {
  set (state, formCategories) {
    console.log('form/set', formCategories)
    state.categories = formCategories
  }
}
