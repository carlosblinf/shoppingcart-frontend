import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import './styles.scss'
import { ShoppingCartProvider } from './contex/ShoppingCartContex';

function App() {

  return (
    <ShoppingCartProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
      </Routes>
   </ShoppingCartProvider>
  )
}

export default App
