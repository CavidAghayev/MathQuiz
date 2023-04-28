import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
function StudentsDetails() {
  const {id} = useParams()
  console.log(id);
  const students = useSelector((state) => state.students.students.items)
  // console.log(student);
  return (
    <div className="student-details section">
      {students?.items?.map((item) => {
        if(item.fields.id === id){  
          return (
            <div>
              <h1>
                {item.fields.name}
              </h1>
            </div>
          )
        }
      })

      }
    </div>
  )
}

export default StudentsDetails