import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { contentfulClient } from '../../libs/contentul';
import styles from '../ExamDetails/examDetails.module.css'
function ExamDetails() {
  const [exam,setExam] = useState(null);
  const {id} = useParams()
  console.log(id);
useEffect(()=> {
contentfulClient.getEntry(id)
.then((data)=> {
  setExam(data)
})
},[])
  return (
    <div className={`${styles.exam} ${styles.section}`}>
      {
        exam && (
          <h1>{exam.fields.title}</h1>
        )
      }
    </div>
  )
}

export default ExamDetails