import styles from "../VideoCard/VideoCard.module.css";
import Button from "../../companents/Button/Button";
import Video from "../../assets/video/video (2).mp4";
import { useRef } from "react";
export const VideoCard = ({ name, questionCount, classNumber }) => {
  const videoRef = useRef();

  return (
    <div className={styles.videocard}>
      <div className={styles.video}>
        <div
          onClick={() => {
            videoRef.current.play();
          }}
          className={styles["play-btn"]}
        ></div>
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
