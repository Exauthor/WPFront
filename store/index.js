export const strict = true

export const state = () => ({
  loading: false,
  error: false,
  url: ''
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  }
}
