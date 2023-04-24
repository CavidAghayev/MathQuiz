import "../Exam/Exam.css";
import Button from "../Button/Button";
function Exam({ image, examtitle, free }) {
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
        <Button size={"sm"} color={"white"}>
          {"Daha ətraflı"}
        </Button>
      </div>
    </div>
  );
}

export default Exam;
