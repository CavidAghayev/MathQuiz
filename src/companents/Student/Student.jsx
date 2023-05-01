import styles from '../Student/Student.module.css'
import { useNavigate } from "react-router-dom";
function Student({ sName, image, university, point, student}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/studentDetails/${student.sys.id}`)} className={styles.student}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{`${"Ad:"} ${sName}`}</h3>
        <span>{`${"Universitet:"} ${university}`}</span>
        <span>{`${"Bal:"} ${point}`}</span>
      </div>
    </div>  
  );
}

export default Student;
