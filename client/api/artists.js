import request from 'superagent'

const rootUrl = '/api/v1/artists'

export const getAllArtistsAPI = () => {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export const getArtistByIdAPI = (id) => {
  return request.get(`${rootUrl}/${id}`)
    .then(res => {
      return res.body
    })
}
