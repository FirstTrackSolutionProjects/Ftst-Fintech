import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar"
import Footer from "./Component/Footer"
import Home from "./Pages/Home"

function App() {
  
return (
    <>
        <NavBar />
          <main className="min-h-screen pt-4">
          <Routes>
            <Route path="/" element={<Home /> } />
          </Routes>
          </main>
   <Footer />
    </>
  )
}

export default App;
