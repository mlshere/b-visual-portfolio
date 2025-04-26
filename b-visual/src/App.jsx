import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <BrowserRouter>
    <div className="relative w-full h-full">
      <Navbar toggleMenu={() => setMenuOpen(!menuOpen)} />
      {menuOpen && <MenuOverlay closeMenu={() => setMenuOpen(false)} />}

      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/reel" element={<Reel />} />
        <Route path="/works" element={<Works />} />
        <Route path="/service" element={<Service />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
