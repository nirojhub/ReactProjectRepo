import './App.css';
import Course from "./components/Course"
const mostpopular = "Python";
const leastpopular = "VUjs";
function App() {
  return (
    <div className="App">
      <h1>Skill soft my changes</h1>
      <Course popCourse={[mostpopular,leastpopular]}/>
    </div>
  );
}

export default App;
