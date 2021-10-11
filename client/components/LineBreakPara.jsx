import React from 'react'

const LineBreakPara = ({ text }) => {
  const newText = text.split('\n')
  console.log(newText)

  return (
    <>
      {newText.map((str, i) => <p key={i}>{str}</p>)}
    </>
  )
}

export default LineBreakPara
