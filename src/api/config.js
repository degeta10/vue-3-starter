const BASE_URL = import.meta.env.VITE_API_BASE_URL
const VERSION = import.meta.env.VITE_API_VERSION

export const API_CONFIG = {
  BASE_URL,
  API_URL: `${BASE_URL}/api/${VERSION}`,
}
