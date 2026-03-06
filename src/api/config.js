const BASE_URL = import.meta.env.VITE_API_BASE_URL
const VERSION_V1 = 'v1'
// const VERSION_V2 = 'v2' // // ENABLE V2 API PREFIX

export const API_CONFIG = {
  BASE_URL,
  API_V1_URL: `${BASE_URL}/api/${VERSION_V1}`,
  //   API_V2_URL: `${BASE_URL}/api/${VERSION_V2}`,  // ENABLE V2 API URL
}
