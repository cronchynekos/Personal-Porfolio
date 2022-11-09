import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Personal-Portfolio/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/Personal-Portfolio/about" element={<About />} />
          <Route path="/Personal-Portfolio/contact" element={<Contact />} />
          <Route path="/Personal-Portfolio/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
