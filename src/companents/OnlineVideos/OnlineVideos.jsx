import styles from "../../companents/OnlineVideos/OnlineVideos.module.css";
import { contentfulClient } from '../../libs/contentul' 
import { useEffect, useState } from "react";
export const OnlineVideos = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    contentfulClient.getEntries({content_type: "onlineVideos", order: "-sys.createdAt"})
    .then((video)=> {
      setVideos(video)
    })
  },[]);
  console.log(videos);
  return <div className={styles["online-videos"]}>
    {
      videos?.items?.map((video)=>{
         return(
          <div>
            <video>
              <source src={video.fields.vdeo.fields.file.url} type="video/mp4"/>
            </video>
          </div>
         )
      })
    }
    </div>;
};
