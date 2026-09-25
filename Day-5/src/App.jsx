import { useState } from 'react'
import './App.css'

function App() {
  const [showList, setShowList] = useState(true)

  const students = [
    { id: 1, name: 'Sakshi', course: 'BCA' },
    { id: 2, name: 'Vishwas', course: 'BSC' },
    { id: 3, name: 'Viha', course: 'BCom' }
  ]

  return (
    <div className="app">

      <p className="day">REACT DAY 5</p>

      <h1>Student List</h1>

      <p className="subtitle">
        Practice lists and conditional rendering
      </p>

      <div className="student-container">

        <div className="list-header">
          <div>
            <h2>Students</h2>
            <p>Total students: {students.length}</p>
          </div>

          <button onClick={() => setShowList(!showList)}>
            {showList ? 'Hide List' : 'Show List'}
          </button>
        </div>

        {showList && (
          <div className="student-list">
            {students.map((student) => (
              <div className="student-card" key={student.id}>

                <div className="number">
                  {student.id}
                </div>

                <div>
                  <h3>{student.name}</h3>
                  <p>{student.course}</p>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <div className="concept">
        <strong>Concept:</strong> map() is used to display a list and
        conditional rendering is used to show or hide content.
      </div>

    </div>
  )
}

export default App