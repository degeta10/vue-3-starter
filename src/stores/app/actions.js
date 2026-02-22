export function setLoading(value) {
  this.loading = value
}

export function setLocale(value) {
  this.locale = value
  localStorage.setItem('lang', this.locale)
}
