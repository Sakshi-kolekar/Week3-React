import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <h1>Student Information</h1>
      <p className="subtitle">Day 2 - Components & Props</p>

      <div className="cards">

        <StudentCard
          name="Sakshi Kolekar"
          course="BCA"
          year="Third Year"
          city="Kolhapur"
          age="20"
        />

        <StudentCard
          name="Shivansh shinde"
          course="BSC"
          year="Third Year"
          city="Pune"
          age="19"
        />

        <StudentCard
          name="Vaibhavi Thakur"
          course="BA"
          year="First Year"
          city="Mumbai"
          age="18"
        />

      </div>
    </div>
  )
}

export default App