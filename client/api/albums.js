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

export const deleteAlbumAPI = (albumId) => {
  return request.delete(`${rootUrl}/${albumId}`)
    .then(res => {
      return res.body
    })
}

export const updateAlbumAPI = (album) => {
  return request.patch(`${rootUrl}/${album.id}`)
    .send(album)
    .then(res => {
      return res.body
    })
}
