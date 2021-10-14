import request from 'superagent'

const rootUrl = '/api/v1/artists'

export const addArtistAPI = (artistData) => {
  return request.post(rootUrl)
    .send(artistData)
    .then(res => {
      return res.body
    })
}

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

export const updateArtistAPI = (id, artistData) => {
  return request.patch(`${rootUrl}/${id}`)
    .send(artistData)
    .then(res => {
      return res.body
    })
}

export const deleteArtistAPI = (id) => {
  return request.delete(`${rootUrl}/${id}`)
    .then(res => {
      return res.body
    })
}
