function StudentCard({ name, course, year, city, age }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  )
}

export default StudentCard