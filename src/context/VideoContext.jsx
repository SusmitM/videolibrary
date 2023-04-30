import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakeFetch";

const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [VideoData, setVideoData] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/videos");
      setVideoData(response.data.videos);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addToLikedVideos = (videoData) => {
    setVideoData(
      VideoData.map((singleVideo) =>
        singleVideo.id === videoData.id
          ? { ...singleVideo, liked: true }
          : singleVideo
      )
    );
  };
  const removeFromLikedVideos = (videoData) => {
    setVideoData(
      VideoData.map((singleVideo) =>
        singleVideo.id === videoData.id
          ? { ...singleVideo, liked: false }
          : singleVideo
      )
    );
  };
  const addToWatchlater = (videoData) => {
    setVideoData(
      VideoData.map((singleVideo) =>
        singleVideo.id === videoData.id
          ? { ...singleVideo, watchlater: true }
          : singleVideo
      )
    );
  };
  const removeFromWatchlater= (videoData) => {
    setVideoData(
      VideoData.map((singleVideo) =>
        singleVideo.id === videoData.id
          ? { ...singleVideo,  watchlater: false }
          : singleVideo
      )
    );
  };


  const countLikedVideos=VideoData.reduce((totalLikedVid,singleVideoData)=>singleVideoData.liked ? totalLikedVid+=1 : totalLikedVid,0);
  const countWatchlaterVideos=VideoData.reduce((totalLikedVid,singleVideoData)=>singleVideoData.watchlater ? totalLikedVid+=1 : totalLikedVid,0);

  


  return (
    <VideoContext.Provider
      value={{ VideoData, addToLikedVideos, removeFromLikedVideos,countLikedVideos,addToWatchlater,removeFromWatchlater, countWatchlaterVideos}}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
