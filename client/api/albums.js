import request from 'superagent'

const rootUrl = '/api/v1/albums'

export const getAllAlbumsAPI = () => {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export const getAlbumByIdAPI = (id) => {
  return request.get(`${rootUrl}/${id}`)
    .then(res => {
      return res.body
    })
}

export const deleteAlbum = (albumId) => {
  return request.delete(`${rootUrl}/${albumId}`)
    .then(res => {
      return res.body
    })
}
