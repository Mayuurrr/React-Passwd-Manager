import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-[85vh]'>
          <Manager />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
