import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../context/VideoContext";
export const VideoDetailCard = ({ videoData }) => {
  const { addToLikedVideos, addToWatchlater } = useVideoContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="videoDetailCard">
        <div className="videoImageSection">
          <img src={videoData?.thumbnail} />
          <div className="playBtn" onClick={()=>window.open(`${videoData?.url}`,"_blank")}>▶︎</div>
        </div>
        <div className="videoDetailsSection">
          <p>{videoData?.title}</p>
          <div className="videoDescription"><b>Description: </b>{videoData?.description}</div>
          <div className="videoDuration"><b>Duration: </b>{videoData?.duration} mins</div>

          <button
            className="likeBtn"
            onClick={() => addToLikedVideos(videoData)}
            disabled={videoData?.liked}
          >
            {videoData?.liked ? "Liked" : "Like"}
          </button>
          <button
            className="watchlaterBtn"
            onClick={() => addToWatchlater(videoData)}
            disabled={videoData?.watchlater}
          >
            {" "}
            {videoData?.watchlater
              ? "Added to Watch Later"
              : "Add to Watch Later"}
          </button>
        </div>
      </div>
    </>
  );
};
