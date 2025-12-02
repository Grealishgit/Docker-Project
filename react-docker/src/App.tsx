import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{
      backgroundImage: `url('https://cdn.pixabay.com/photo/2025/11/28/14/39/sunset-9983072_1280.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      width: '100%',
      margin: 0,
    }}>
      <h1 style={{ margin: 0, fontSize: '4.2em' }}>Welcome to Docker</h1>
      <p style={{ margin: 0, fontSize: '2em' }}>Docker App Running Successfully!</p>

    </div>
  )
}

export default App
