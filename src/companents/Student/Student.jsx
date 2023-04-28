import "./Student.css";
import { useNavigate } from "react-router-dom";
function Student({ sName, image, university, point, student}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/studentDetails/${student.fields.id}`)} className="student">
      <div className="student__image">
        <img src={image} alt="" />
      </div>
      <div className="student__info">
        <h3>{`${"Ad:"} ${sName}`}</h3>
        <span>{`${"Universitet:"} ${university}`}</span>
        <span>{`${"Bal:"} ${point}`}</span>
      </div>
    </div>
  );
}

export default Student;
