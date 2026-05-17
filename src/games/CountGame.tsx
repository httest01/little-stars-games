import { useEffect, useState } from 'react'

export default function CountGame() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    nextRound()
  }, [])

  const nextRound = () => {
    const randomCount =
      Math.floor(Math.random() * 5) + 1

    setCount(randomCount)
  }

  const stars = Array(count).fill('⭐')

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

  const handleClick = (num: number) => {
    if (num === count) {
      playCorrect()

      speak(`Great job! ${count}!`)

      setTimeout(() => {
        nextRound()
      }, 2000)
    } else {
      playWrong()
      speak('Try again!')
    }
  }

  const speakQuestion = () => {
    speak('How many stars do you see?')

    setTimeout(() => {
      speak('Có bao nhiêu ngôi sao?', 'vi-VN')
    }, 1000)
  }

  return (
    <>
      <h2>⭐ Count the Stars!</h2>

      <p>How many stars do you see?</p>

      <div
        style={{
          fontSize: 100,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {stars.join(' ')}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            style={numberButton}
          >
            {num}
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

const numberButton = {
  fontSize: 50,
  border: 'none',
  borderRadius: 24,
  padding: '20px 30px',
  cursor: 'pointer',
  background: '#d9f4ff',
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