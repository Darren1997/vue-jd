import axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise'

export const post = (url, data = {}) => {
  const baseUrl = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/'
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => resolve(response.data), err => reject(err))
  })
}
