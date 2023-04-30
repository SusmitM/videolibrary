import { Routes,Route } from "react-router-dom";
import { AllVideos } from "../pages/AllVideos";
import { Home } from "../pages/Home";
import { LikedVideos } from "../pages/LikedVideos";
import { VideoDetail } from "../pages/VideoDetails";
import { Watchlater } from "../pages/Watchlater";
import {InvalidLink} from "../pages/InvalidLink";

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allVideos" element={<AllVideos/>}/>
            <Route path="/likedVideos" element={<LikedVideos/>}/>
            <Route path="/watchLater" element={<Watchlater/>}/>
            <Route path="/videoDetails/video/:VideoId" element={<VideoDetail/>}/>
            <Route path="*" element={<InvalidLink/>}/>
        </Routes>
        </>
    )
}
