import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Toppage from './components/Toppage.JSX'
import Header from './components/Header.JSX'
import ScndPage from './components/ScndPage'
import Thrdpage from './components/Thrdpage'
import Frthpage from './components/Frthpage.jsx'
import Ffthpage from './components/Ffthpage.jsx'
import Sxthpage from './components/Sxthpage.jsx'
import Svnthpage from './components/Svnthpage.jsx' 
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (

      <main class="main" id="top" scroll-to-top="scroll-to-top">
          <div class="content">
            <Header/>
              {/* <Nav/> */}

          <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
              <Toppage/>
              <ScndPage/>
              <Thrdpage/>
              <Frthpage/>
              <Ffthpage/>
              <Sxthpage/>
              <Svnthpage/>
              <Pricing/>
              <Faq/>
              <Contact/>
              <Footer/>

              {/* <Other components/> */}
          </div>

        </div>
      </main>

  )
}

export default App
