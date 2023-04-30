import { useVideoContext } from "../context/VideoContext";
import { NavLink } from "react-router-dom";

export const VideoCard = ({
  singleVideoData,
  LikePage,
  AllVideosPage,
  WatchlaterPage,
}) => {
  const {
    addToLikedVideos,
    addToWatchlater,
    removeFromLikedVideos,
    removeFromWatchlater,
  } = useVideoContext();

  return (
    <div className="videoCard">
      <div className="imageContainer">
        <img src={singleVideoData.thumbnail} />
      </div>
      <div className="detailsSection">
        <div className="cardTitle">{singleVideoData.title}</div>
        <div>
          <NavLink to={`/videoDetails/video/${singleVideoData.id}`}>
            Watch Here
          </NavLink>
        </div>
        <div className="buttonContainer">
        {AllVideosPage && (
          <button
            className="likeBtn"
            onClick={() => addToLikedVideos(singleVideoData)}
            disabled={singleVideoData.liked}
          >
            {singleVideoData.liked ? "Liked" : "Like"}
          </button>
        )}
        {WatchlaterPage && (
          <button
            className="likeBtn"
            onClick={() => addToLikedVideos(singleVideoData)}
            disabled={singleVideoData.liked}
          >
            {singleVideoData.liked ? "Liked" : "Like"}
          </button>
        )}

        {LikePage && (
          <button
            className="likeBtn"
            onClick={() => removeFromLikedVideos(singleVideoData)}
          >
            Remove
          </button>
        )}

        {AllVideosPage && (
          <button
            className="watchlaterBtn"
            onClick={() => addToWatchlater(singleVideoData)}
            disabled={singleVideoData.watchlater}
          >
            {" "}
            {singleVideoData.watchlater
              ? "Added to Watch Later"
              : "Add to Watch Later"}
          </button>
        )}
        {LikePage && (
          <button
            className="watchlaterBtn"
            onClick={() => addToWatchlater(singleVideoData)}
            disabled={singleVideoData.watchlater}
          >
            {" "}
            {singleVideoData.watchlater
              ? "Added to Watch Later"
              : "Add to Watch Later"}
          </button>
        )}

        {WatchlaterPage && (
          <button
            className="likeBtn"
            onClick={() => removeFromWatchlater(singleVideoData)}
          >
            Remove
          </button>
        )}
        </div>
      </div>
    </div>
  );
};
