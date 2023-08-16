import './Saidbar.css'

import Main1 from '../components/Main1'
import icon from  '../image/icon.png'
import uy from '../image/uy.png'
import catigoria from '../image/catigoria.png'
import carta from '../image/plastik.png'
import boy from '../image/2odam.png'
import calculator from '../image/calculator.png'
import settings from '../image/settings.png'
import surcle1 from '../image/Ellipse1.png'
import surcle2 from '../image/Ellipse2.png'
import surcle3 from '../image/Ellipse3.png'
import profile from '../image/profile.png'
import Catigoria from '../catigoria/catigoria'
import down from '../image/nexticon.png'


function Saidbar() {

    return (
      <div className='container'>
        <div className="bar">
          <div className="icon">
            <img style={{width:'25px'}} src={icon} alt="" />
            <h6>iffee</h6>
          </div>
          <div className="menu">
            <p style={{color:'#3629B7'}}>Menu</p>
            <div className="menu__one">
               <Main1 icon={uy} title='home' />
              <Main1 icon={catigoria} title='Garage' />
              <Main1 icon={carta} title='Service Menu' />
              <Main1 icon={boy} title='Racers' />
              <Main1 icon={calculator} title='Calculator' />
              <Main1 icon={settings} title='Settings ' /> 
            </div>
            <div className="catigoria">
              <p>Scheduled Races</p>
              <Catigoria image={surcle1} text='MotoGP 2022'/>
              <Catigoria image={surcle2} text='Dynamics 22'/>
              <Catigoria image={surcle3} text='Olympics'/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} className="box">
              <img src={profile}/>
              <p style={{marginTop:'25px'}}>Killua</p>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Saidbar
