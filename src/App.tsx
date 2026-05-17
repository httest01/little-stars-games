import { useState } from 'react'
import AppleGame from './games/AppleGame'
import CountGame from './games/CountGame'
import ColorGame from './games/ColorGame'

type GameMode = 'apple' | 'count' | 'color'

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>('apple')

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom, #FFF6B7 0%, #FFD7EC 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: 32,
          padding: 40,
          maxWidth: 900,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontSize: 70 }}>🌟</div>

        <h1
          style={{
            fontSize: 42,
            marginBottom: 25,
            color: '#ff7b00',
          }}
        >
          Little Stars Games
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            marginBottom: 35,
          }}
        >
          <button
            onClick={() => setGameMode('apple')}
            style={buttonStyle(gameMode === 'apple')}
          >
            🍎 Apple Game
          </button>

          <button
            onClick={() => setGameMode('count')}
            style={buttonStyle(gameMode === 'count')}
          >
            ⭐ Count Game
          </button>

          <button
            onClick={() => setGameMode('color')}
            style={buttonStyle(gameMode === 'color')}
          >
            🎨 Color Game
          </button>
        </div>

        {gameMode === 'apple' && <AppleGame />}
        {gameMode === 'count' && <CountGame />}
        {gameMode === 'color' && <ColorGame />}

        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            color: '#777',
          }}
        >
          Little Stars | Bé Học Vui 🌟
        </div>
      </div>
    </div>
  )
}

function buttonStyle(active: boolean) {
  return {
    padding: '12px 18px',
    border: 'none',
    borderRadius: 14,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 'bold',
    background: active ? '#ffb703' : '#eee',
  }
}