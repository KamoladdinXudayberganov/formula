import React from 'react'
import './menu.css'
import key from '../../image/group.png'
import rul from '../../image/vector.png'
import settings from '../../image/vector (1).png'
import battery from '../../image/group (1).png'
import ballon from '../../image/group (2).png'
import lock from '../../image/group (3).png'

const Menu = () => {
  return (
    <div className='menu__container'>
        <div  className="card">
            <img src={key} alt="" />
            <p>Start</p>
        </div>
        <div className="card">
            <img src={rul} alt="" />
            <p>Drive</p>
        </div>
        <div className="card">
            <img src={settings} alt="" />
            <p>Maintinance</p>
        </div>
        <div className="card">
            <img src={battery} alt="" />
            <p>Battery</p>
        </div>
        <div className="card">
            <img src={ballon} alt="" />
            <p>Tires</p>
        </div>
        <div className="card">
            <img src={lock} alt="" />
            <p>Lock</p>
        </div>
    </div>
  )
}

export default Menu