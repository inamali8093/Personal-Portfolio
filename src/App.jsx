import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './pages/Skills'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
     
    </>
  )
}

export default App
