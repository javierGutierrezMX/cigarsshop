import React from 'react'
import classess from './Input.module.css'

export const Input = (props) => {
  return (
    <div className={classess.input}>
        <label htmlFor={props.input.id} >{props.label}</label>
        <input  {...props.input}/>
    </div>
  )
}
