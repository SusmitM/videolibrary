import { VideoCard } from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export const AllVideos = () => {
  const { VideoData} = useVideoContext();

  return (
    <>
      <h1>All Videos</h1>
      <div className="videoContainer">
        {VideoData.map((singleVideoData) => {
          return (
            <VideoCard singleVideoData={singleVideoData} AllVideosPage />
          );
        })}
      </div>
    </>
  );
};
