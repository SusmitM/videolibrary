import { VideoCard } from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export const Watchlater=()=>{
    const { VideoData,removeFromWatchlater } = useVideoContext();
    return(
        <>
        <h1>Watch Later Videos</h1>
        <div className="videoContainer">
        {VideoData.map((singleVideoData) => {
          if (singleVideoData.watchlater) {
            return (
              <VideoCard singleVideoData={singleVideoData} WatchlaterPage />
            );
          }
        })}
      </div>
        </>
    )
}