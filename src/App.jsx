import './App.css'
import Catigoria from './catigoria/catigoria'
import Menu from './components/Menu/Menu'
import Main__center__footer__img from './components/main__center__footer__img/Main__center__footer__img'
import Main from './main/Main'
import Saidbar from './saidbar/Saidbar'


function App() {

  return (
    <div className="container">
      <Saidbar/>
      <Main/>
    </div>
  )
}

export {App}
