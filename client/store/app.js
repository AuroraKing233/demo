const state = () => ({
  counter: 0,
  name: '萌二社',
  activePage: 'home',
  showSidebar: false,
})

const mutations = {
  increment(state, value) {
    console.log(state, value)
    state.counter++
  },
  setShowSidebar(state, value) {
    state.showSidebar = value
  },
  setActivePage(state, value) {
    state.activePage = value
  },
}
const getters = {
  name: (state) => state.name,
  activePage: (state) => state.activePage,
}
export { state, mutations, getters }
