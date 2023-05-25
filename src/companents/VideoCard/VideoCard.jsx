import styles from "../VideoCard/VideoCard.module.css";
import Button from "../../companents/Button/Button";
import Video from "../../assets/video/video (2).mp4";
import { useRef } from "react";
import {ReactComponent as PlayButton } from "../../assets/images/Vector.svg" 
import {ReactComponent as PauseButton } from "../../assets/images/pause-button-svgrepo-com (2).svg" 
export const VideoCard = ({ name, questionCount, classNumber }) => {
  const videoRef = useRef();
  const buttonRef = useRef();
  const pauseButtonRef = useRef();
  const playButtonRef = useRef();
  return (
    <div className={styles.videocard}>
      <div className={styles.video}>
        <div className={styles.overlay}>
        <PauseButton ref={pauseButtonRef} className={styles.pause}/>
        <div
          onClick={() => {
            videoRef.current.play();
            if(playButtonRef.current.style.display = 'none'){
              pauseButtonRef.current.style.display = "block"
            }
          }}
          className={styles["play-btn"]}
          ref={buttonRef}
        >
            <PlayButton ref={playButtonRef} className={styles.play}/>
        </div>
        </div>
        <video ref={videoRef} style={{ width: "100%", borderRadius: "10px" }}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <div className={styles.items}>
          <span>{`${questionCount} sual`}</span>
          <span>{name}</span>
        </div>
        <div className={styles.class}>
          <span>{`${classNumber}-cu sinif buraxılış imtahanı`}</span>
        </div>
        <div className={styles.btn}>
          <Button size={"sm"} color={"primary"}>
            {"Videonu izlə"}
          </Button>
        </div>
      </div>
    </div>
  );
};
