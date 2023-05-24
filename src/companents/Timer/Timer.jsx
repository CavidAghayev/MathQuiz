import { useState, useEffect } from "react";
import styles from "../../companents/Timer/Timer.module.css";
const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = new Date();
  deadline.setHours(deadline.getHours() + 1);
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return (
    <div className={styles.timer}>
      <span>
        {formattedMinutes} : {formattedSeconds}
      </span>
    </div>
  );
};

export default Timer;
