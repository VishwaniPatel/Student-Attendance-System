import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Students from './pages/students/Students'

function App() {

  return (
    <>
      {/* Header Section */}
      <div className="header">Student Management Application</div>

      <div className="container">
        <h2 className="title">Students List</h2>
        <Students />
      </div>
    </>
  )
}

export default App
