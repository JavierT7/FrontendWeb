import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/Maincontent';

function App() {

  return (
    <>
      <div>
        <div className="min-vh-100">
          <Navbar/>
          <div className="container-fluid px-4">
            <div className="row">
              <div className='col-md-3'>
                <Sidebar/>
              </div>
              <div className='col-md-9'>
                <MainContent/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
