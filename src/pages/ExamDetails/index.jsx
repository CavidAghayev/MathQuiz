import React from "react";
import { useParams } from "react-router-dom";

function ExamDetails() {
  const { id } = useParams();
  alert(id)
  return <div style={{ margin: 200 }}>ExamDetails</div>;
}

export default ExamDetails;
