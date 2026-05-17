import { useEffect, useState } from 'react'

const items = [
  { emoji: '🍎', name: 'APPLE', vietnamese: 'TÁO' },
  { emoji: '🍌', name: 'BANANA', vietnamese: 'CHUỐI' },
  { emoji: '🚌', name: 'BUS', vietnamese: 'XE BUÝT' },
]

export default function AppleGame() {
  const [target, setTarget] = useState(items[0])

  useEffect(() => {
    nextRound()
  }, [])

  const nextRound = () => {
    const randomItem =
      items[Math.floor(Math.random() * items.length)]

    setTarget(randomItem)
  }

  const speak = (text: string, lang = 'en-US') => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  const playCorrect = () => {
    new Audio(
      'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'
    ).play()
  }

  const playWrong = () => {
    new Audio(
      'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'
    ).play()
  }

  const speakQuestion = () => {
    speak(`Can you find ${target.name}?`)

    setTimeout(() => {
      speak(target.vietnamese, 'vi-VN')
    }, 1000)
  }

  const handleClick = (item: typeof items[0]) => {
    if (item.name === target.name) {
      playCorrect()

      speak(`Great job! ${item.name}!`)

      setTimeout(() => {
        speak(item.vietnamese, 'vi-VN')
      }, 1000)

      setTimeout(() => {
        nextRound()
      }, 2000)
    } else {
      playWrong()
      speak('Try again!')
    }
  }

  return (
    <>
      <h2>🍎 Find the Item!</h2>

      <p>Can you find {target.name}?</p>
      <p>{target.vietnamese}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginTop: 30,
        }}
      >
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            style={gameButton}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      <button
        onClick={speakQuestion}
        style={speakButton}
      >
        🔊 Hear the Question
      </button>

      <button
        onClick={nextRound}
        style={nextButton}
      >
        ➡️ Next Question
      </button>
    </>
  )
}

const gameButton = {
  fontSize: 90,
  border: 'none',
  borderRadius: 24,
  padding: 30,
  cursor: 'pointer',
  background: '#fff9d9',
}

const speakButton = {
  marginTop: 35,
  marginRight: 12,
  background: '#ff9f1c',
  border: 'none',
  color: 'white',
  padding: '16px 28px',
  borderRadius: 18,
  fontSize: 22,
  cursor: 'pointer',
}

const nextButton = {
  marginTop: 35,
  background: '#00b894',
  border: 'none',
  color: 'white',
  padding: '16px 28px',
  borderRadius: 18,
  fontSize: 22,
  cursor: 'pointer',
}