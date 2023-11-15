import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './Components/Students';
import AddStudet from './Components/AddStudent';

function App() {

  const [students, setStudent] = useState([{ roll: 1020, name: "Rachana", dept: "IT" }, { roll: 1021, name: "Parnika", dept: "CSE" }]);

  // const students = [{ roll: 1020, name: "Rachana", dept: "IT" }, { roll: 1021, name: "Parnika", dept: "CSE" }]

  // useEffect(() => {
  //   console.log("Test");

  //   setTimeout(() => {
  //     // students.push({roll: 1022, name: "Sunil", dept: "ECE"});
  //     setStudent((prev) => {
  //       console.log("prev ", prev);
  //       return [...prev, { roll: 1022, name: "Sunil", dept: "ECE" }]
  //     });

  //     console.log("3rd student is added");
  //   }, 5000)

  //   return () => {
  //     // Logic to execute before the component is unmounted
  //     // Similar to componentWillUnmount
  //   };

  // }, [])

  useEffect(() => {
    console.log("2nd student", students[1]);
    console.log("new student", students[2]);
  }, [students])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container p-5">
          <div className="row">
            <AddStudet setStudent={setStudent} />
          </div>
          <div className="row p-5">
            <Students students={students} />
          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
