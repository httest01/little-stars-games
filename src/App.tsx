export default function LittleStarsGame() {
  const items = [
    { emoji: '🍎', name: 'APPLE', vietnamese: 'TÁO' },
    { emoji: '🍌', name: 'BANANA', vietnamese: 'CHUỐI' },
    { emoji: '🚌', name: 'BUS', vietnamese: 'XE BUÝT' },
  ]

  const target = items[0]

  const speak = (text: string, lang = 'en-US') => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.9
    utterance.pitch = 1.2
    speechSynthesis.speak(utterance)
  }

  const playCorrectSound = () => {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'
    )
    audio.volume = 0.3
    audio.play()
  }

  const playWrongSound = () => {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'
    )
    audio.volume = 0.25
    audio.play()
  }

  const handleClick = (item: typeof items[0]) => {
    if (item.name === target.name) {
      playCorrectSound()
      speak('Great job! Apple!')
      setTimeout(() => {
        speak('Táo', 'vi-VN')
      }, 1200)
    } else {
      playWrongSound()
      speak('Try again!')
    }
  }

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
          maxWidth: 700,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontSize: 70 }}>🌟</div>

        <h1
          style={{
            fontSize: 48,
            marginBottom: 10,
            color: '#ff7b00',
          }}
        >
          Find the Apple!
        </h1>

        <p
          style={{
            fontSize: 28,
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Can you find the APPLE?
        </p>

        <p
          style={{
            fontSize: 24,
            color: '#666',
            marginBottom: 40,
          }}
        >
          Táo ở đâu?
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              style={{
                border: 'none',
                borderRadius: 24,
                padding: 30,
                background: '#fff9d9',
                cursor: 'pointer',
                fontSize: 90,
                transition: 'transform 0.2s ease',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {item.emoji}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            speak('Find the Apple!')
            setTimeout(() => {
              speak('Táo ở đâu?', 'vi-VN')
            }, 1000)
          }}
          style={{
            marginTop: 35,
            background: '#ff9f1c',
            border: 'none',
            color: 'white',
            padding: '16px 28px',
            borderRadius: 18,
            fontSize: 22,
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        >
          🔊 Hear the Question
        </button>

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
