import './App.css'
import { useState } from 'react'
import HomePage from './HomePage'

function App() {

  const [page, setPage] = useState('home');

  return (
    <>
      <div>
        {page === 'home' && <HomePage />}
      </div>
    </>
  )
}

export default App
