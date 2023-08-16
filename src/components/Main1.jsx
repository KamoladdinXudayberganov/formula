import React from 'react'

 const Main1 = (props) => {
  return (
    <div style={{marginBottom:'10px',display:'flex',justifyContent:'start',alignItems:'center'}}   className='container'>
        <img src={props.icon}/>
        {props.title}
    </div>
  )
}
export default Main1