import React from 'react'

import Button from './Button'
import ButtonGroup from './ButtonGroup'

const Home = (props) => {
  return (
    <>
      <h1>Welcome to VinylBase</h1>
      <p>
        This is a copy of an existing project that I created during
        my time as Kaiako Matua (lead teacher) at Enspiral Dev Academy
      </p>
      <p>
        Today we&apos;re using it to explore SASS (syntactically awesome stylesheets) and the language we prefer to use, SCSS.
      </p>
      <ButtonGroup>
        <Button buttonFunc={() => props.history.push('/albums')} buttonText='View albums' />
        <Button buttonFunc={() => props.history.push('/artists')} buttonText='View artists' />
      </ButtonGroup>
    </>
  )
}

export default Home
