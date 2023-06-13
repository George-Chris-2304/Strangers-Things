import { useState } from 'react'
import FetchPosts from './components/fetchPost'

import './App.css'

function App() {
  const [allPosts, setAllPosts] = useState([])
  return (
    <div className="App">
    
    <FetchPosts allPosts={allPosts} setAllPosts={setAllPosts}/>
  </div>
  )
}

export default App
