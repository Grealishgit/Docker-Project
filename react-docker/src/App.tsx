import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{
      backgroundImage: `url('https://cdn.pixabay.com/photo/2017/03/12/06/18/container-2136505_960_720.jpg')`,
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
      <h1 style={{ margin: 0, color: '#ffffff', fontSize: '4.2em' }}>Welcome to Docker</h1>
      <p style={{ margin: 0, color: '#ffffff', fontSize: '2em' }}>Docker App Running Successfully!</p>

    </div>
  )
}

export default App
