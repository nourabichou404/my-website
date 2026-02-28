// App.jsx

// Variable outside the component
const courseTitle = "React with Vite";

// Main React functional component
function App() {

  // Variable inside the component
  const studentName = "Nour";

  // Object inside the component
  const student = {
    name: "Nour",
    age: 20,
    track: "Frontend"
  };

  // Function inside the component
  function sayHello() {
    return `Hello, ${studentName}!`;
  }

  // JSX must return one parent element
  return (
    <div>
      {/* Heading */}
      <h1>Hello! This is my first React component</h1>

      {/* Display variable inside component */}
      <p>My name is {studentName}</p>

      {/* Display variable outside component */}
      <p>Welcome to {courseTitle}, {studentName}!</p>

      {/* Display object properties */}
      <p>Student name: {student.name}</p>
      <p>Student age: {student.age}</p>
      <p>Student track: {student.track}</p>

      {/* Display function result */}
      <p>{sayHello()}</p>

      {/* Form elements */}
      <label htmlFor="inputName">Enter your name:</label>
      <input type="text" id="inputName" />
    </div>
  );
}

// Export App so Vite can use it in main.jsx
export default App;

// Reflection comments for teacher
// One thing I understand well: Rendering variables and objects in JSX
// One thing still confusing: Using functions across multiple components
// One mistake I made and fixed: Tried rendering {student} directly which caused an error
