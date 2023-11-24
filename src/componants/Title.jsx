import React from 'react'

const Title = (props) => {
  return (
    <div class="title">
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
  )
}

export default Title