import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Content(){
  const [students, setStudents] = useState<any[]>([])
  useEffect(()=>{
    axios.get("http://localhost:5000/getStudents").then(
      students => setStudents(students.data)
    ).catch(
      err => console.log(err) 
    )
  }, [])

  return (
    <>
    <h2 className="text-center" style={{marginTop : "50px"}}>Student data</h2>
    <table className="table text-center offset-1 border"  style={{marginTop : "50px" , width: "80%"}}>
    <thead className="table-dark" >
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
        </tr>
    </thead>
      <tbody className="table-light">
        {
          students.map(student => {
            return <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.score}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    <hr />
    </>
)}
export default Content;