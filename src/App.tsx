import './App.css'
import { useState } from 'react'
import HomePage from './HomePage'
import ShoppingList from './pages/ShoppingList';

function App() {

  const [page, setPage] = useState('home');

  return (
    <>
      <div>
        {page === 'home' ? (<HomePage onNavigate={setPage}/>) : page === 'shoppingList' && (<ShoppingList/>) }
      </div>
    </>
  )
}

export default App
