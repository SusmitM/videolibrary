import { VideoCard } from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export const LikedVideos = () => {
  const { VideoData, removeFromLikedVideos } = useVideoContext();
  return (
    <>
      <h1>Liked Videos </h1>
      <div className="videoContainer">
        {VideoData.map((singleVideoData) => {
          if (singleVideoData.liked) {
            return (
              <VideoCard singleVideoData={singleVideoData} LikePage  />
             
            );
          }
        })}
      </div>
    </>
  );
};
