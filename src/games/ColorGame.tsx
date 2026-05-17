import { useEffect, useState } from 'react'

const colors = [
  {
    name: 'RED',
    vietnamese: 'ĐỎ',
    color: '#ff4d4d',
  },
  {
    name: 'BLUE',
    vietnamese: 'XANH DƯƠNG',
    color: '#4d7cff',
  },
  {
    name: 'GREEN',
    vietnamese: 'XANH LÁ',
    color: '#4caf50',
  },
  {
    name: 'YELLOW',
    vietnamese: 'VÀNG',
    color: '#ffd60a',
  },
]

export default function ColorGame() {
  const [target, setTarget] = useState(colors[0])

  useEffect(() => {
    nextRound()
  }, [])

  const nextRound = () => {
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)]

    setTarget(randomColor)
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

  const handleClick = (name: string) => {
    if (name === target.name) {
      playCorrect()

      speak(`Great job! ${target.name}!`)

      setTimeout(() => {
        speak(target.vietnamese, 'vi-VN')
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
      <h2>🎨 Find the Color!</h2>

      <p>Can you find {target.name}?</p>
      <p>{target.vietnamese}</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          marginTop: 40,
          flexWrap: 'wrap',
        }}
      >
        {colors.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item.name)}
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              background: item.color,
            }}
          />
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