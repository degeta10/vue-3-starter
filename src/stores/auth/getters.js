export const isAuthenticated = (state) => (state.me ? 1 : 0)
export const getMe = (state) => state.me
