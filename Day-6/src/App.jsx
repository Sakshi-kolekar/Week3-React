function App() {
  const courses = [
    {
      name: 'Python Full Stack Development',
      description: 'Learn frontend and backend development using Python.',
      duration: '6 Months',
      available: true
    },
    {
      name: 'Java Full Stack Development',
      description: 'Learn to build web applications using Java technologies.',
      duration: '3 Months',
      available: false
    },
    {
      name: 'Web Full Stack Development',
      description: 'Learn frontend and backend technologies for web development.',
      duration: '6 Months',
      available: true
    },
    {
      name: 'Data Science',
      description: 'Learn data analysis, visualization and machine learning basics.',
      duration: '5 Months',
      available: true
    },
    {
      name: 'Data Analytics',
      description: 'Learn data analysis and create useful business insights.',
      duration: '4 Months',
      available: true
    },
    {
      name: 'AI & Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning.',
      duration: '5 Months',
      available: false
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Internship Courses
        </h1>

        <p className="text-slate-500 mt-2">
          Day 6 - Styling Components with Tailwind CSS
        </p>
      </div>

      {/* Course Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">

        {courses.map((course) => (
          <div
            key={course.name}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-blue-500 hover:shadow-md transition"
          >

            <h2 className="text-lg font-bold text-blue-800 mb-2">
              {course.name}
            </h2>

            <p className="text-sm text-slate-600 leading-5 mb-2">
              <strong>Description:</strong>{' '}
              {course.description}
            </p>

            <p className="text-sm text-slate-600 mb-2">
              <strong>Duration:</strong>{' '}
              {course.duration}
            </p>

            <p
              className={`text-sm font-bold ${
                course.available
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              Status:{' '}
              {course.available
                ? 'Available'
                : 'Not Available'}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App