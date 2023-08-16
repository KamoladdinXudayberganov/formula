import React from 'react'
import './Catigoria.css'

const Catigoria = (props) => {
  return (
    <div style={{marginBottom:'15px'}}>
        <img style={{width:'20px'}} src={props.image} alt="" />
        {props.text}
    </div>
  )
}
export default Catigoria    