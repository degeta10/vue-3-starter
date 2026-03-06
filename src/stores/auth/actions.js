import api from '@/api'

export async function login(payload) {
  const res = await api.post('/login', payload)
  if (res.data.success) {
    this.access_token = res.data.data.access_token
    this.user = res.data.data.user
    localStorage.setItem('access_token', this.access_token)
    localStorage.setItem('user', JSON.stringify(this.user))
    return true
  }
  return false
}

export async function logout() {
  const res = await api.post('/logout')
  if (res.data.success) {
    this.user = null
    this.access_token = null
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    return true
  }
  return false
}
