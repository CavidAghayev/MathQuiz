import styles from "../../companents/OnlineVideos/OnlineVideos.module.css";
import { contentfulClient } from "../../libs/contentul";
import { useEffect, useState } from "react";
import { VideoCard } from "../VideoCard/VideoCard";
export const OnlineVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "onlineVideos", order: "-sys.createdAt" })
      .then((video) => {
        setVideos(video);
      });
  }, []);
  console.log(videos);
  return (
    <div className={styles["online-videos"]}>
      {videos?.items?.map((video) => {
        return (
          <VideoCard
            key={video.sys.id}
            name={video.fields.name}
            questionCount={video.fields.questionCount}
            classNumber={video.fields.class}
          />
        );
      })}
    </div>
  );
};
