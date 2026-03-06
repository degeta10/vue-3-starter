export default () => ({
  user: JSON.parse(localStorage.getItem('user')),
  access_token: localStorage.getItem('access_token'),
})
