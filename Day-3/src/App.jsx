import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

      <div className="header">
        <p>REACT DAY 3</p>
        <h1>Counter App</h1>
        <span>Learn and practice React state</span>
      </div>

      <div className="counter-box">

        <h2>My Counter</h2>

        <div className="count-circle">
          {count}
        </div>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>
            −
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>

        <button
          className="reset-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>

      <div className="info">
        <h3>How it works?</h3>
        <p>
          The useState hook stores the counter value and
          updates the UI whenever the value changes.
        </p>
      </div>

    </div>
  )
}

export default App