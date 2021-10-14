import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateAlbumThunk } from '../actions/albums'

import ButtonGroup from './ButtonGroup'
import Button from './Button'
import Input from './Input'
import Modal from './Modal'

const AlbumEdit = (props) => {
  const id = parseInt(props.match.params.id)
  const singleAlbum = props.albums.find(album => album.id === id)
  const { dispatch } = props

  const [formData, setFormData] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setFormData(singleAlbum)
  }, [singleAlbum])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateAlbumThunk(formData))
    setModalVisible(true)
  }

  const changeHandler = (e) => {
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Update album</h1>
      {formData && (
        <form onSubmit={handleSubmit}>
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='name'
            label='Album name'
            name='name'
            placeholder='Enter album name'
            value={formData.name}
            required
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='condition'
            label='Condition'
            name='condition'
            placeholder='Vinyl / Cover condition'
            value={formData.condition}
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='image'
            label='Image URL'
            name='image'
            placeholder='URL to a (square) image'
            value={formData.image}
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='spotfiyId'
            label='Spotfiy Id'
            name='spotfiyId'
            placeholder='Can be extracted from sharing link'
            value={formData.spotifyId}
          />
          <Button
            buttonText='Submit'
          />
        </form>
      )}
      {modalVisible && (
        <Modal title="Updated!">
          <p>Successfully updated {formData.name}</p>
          <ButtonGroup>
            <Button buttonFunc={() => props.history.push(`/albums/${formData.id}`)} buttonText='Close' />
          </ButtonGroup>
        </Modal>
      )}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(AlbumEdit)
