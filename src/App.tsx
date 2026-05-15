export default function App() {
  const items = [
    { emoji: '🍎', name: 'APPLE', vietnamese: 'TÁO' },
    { emoji: '🍌', name: 'BANANA', vietnamese: 'CHUỐI' },
    { emoji: '🚌', name: 'BUS', vietnamese: 'XE BUÝT' },
  ]

  const target = items[0]

  const handleClick = (item: typeof items[0]) => {
    if (item.name === target.name) {
      alert('🎉 Great job! APPLE = TÁO 🍎')
    } else {
      alert('😊 Try again!')
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>🍎 Find the Apple!</h1>

        <p className="subtitle">Can you find the APPLE?</p>
        <p className="subtitle2">Táo ở đâu?</p>

        <div className="grid">
          {items.map((item, index) => (
            <button
              key={index}
              className="gameButton"
              onClick={() => handleClick(item)}
            >
              {item.emoji}
            </button>
          ))}
        </div>

        <div className="footer">
          Little Stars | Bé Học Vui 🌟
        </div>
      </div>
    </div>
  )
}