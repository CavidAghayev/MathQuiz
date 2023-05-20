import styles from "../VideoCard/VideoCard.module.css";
import Button from "../../companents/Button/Button";
import Video from '../../assets/video/video (2).mp4'
export const VideoCard = ({ name, questionCount, classNumber }) => {
  return (
    <div className={styles.videocard}>
      <div className={styles.video}>
       <video style={{width: "100%", borderRadius: "10px"}} controls>
  <source src={Video} type="video/mp4"/>
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
