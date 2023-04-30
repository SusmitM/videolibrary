import { useParams } from "react-router-dom";
import { useVideoContext } from "../context/VideoContext";
import { VideoDetailCard } from "../components/VideoDetailCard";

export const VideoDetail = () => {
  const { VideoId } = useParams();
  const { VideoData } = useVideoContext();

  const videoData = VideoData.find((item) => item.id === Number(VideoId));

  return (
    <>
      <div className="videoContainer">
        <VideoDetailCard videoData={videoData} />
      </div>
    </>
  );
};
