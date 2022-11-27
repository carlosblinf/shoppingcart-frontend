import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import './styles.scss'

function App() {

  return (
   <div className="containerApp">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store/>} />
    </Routes>
   </div>
  )
}

export default App
