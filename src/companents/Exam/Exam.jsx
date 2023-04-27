import "../Exam/Exam.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Exam({ image, examtitle, free  }) {
  const navigate = useNavigate()
  return (
    <div className="exam">
      <div className="exam__image">
        <img src={image} alt="" />
      </div>
      <div className="exam__info">
        <h3>{examtitle}</h3>
        <span>{free}</span>
      </div>
      <div className="exam__buttons">
        <Button size={"sm"} color={"primary"}>
          {"Testə başla"}
        </Button>
        <Button onClick={()=> navigate(`/examDetails`)} 
        size={"sm"} color={"white"}>
          {"Daha ətraflı"}
        </Button>
      </div>
    </div>
  );
}

export default Exam;
