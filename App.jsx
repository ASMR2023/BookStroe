import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <nav>
          <Navbar />
      </nav>
      
      <aside className=' mt-10'>
          <Sidebar  />
      </aside>
     
    </div>
  )
}
