import React from 'react'
import Component from './Component'
const Button = ({count}) => {
  return (
    <div>
      <button><span><Component count={count}></Component></span>I am a button</button>
    </div>
  )
}

export default Button
