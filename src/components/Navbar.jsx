import { NavLink } from "react-router-dom"
import { useVideoContext } from "../context/VideoContext"


export const Navbar=()=>{
    const{ countLikedVideos, countWatchlaterVideos}=useVideoContext();
    const getActiveStyle = ({ isActive }) => ({
        fontWeight:"600" ,
        color: "white",
        border:isActive ? "3px solid grey" : "",
        borderRadius:"10px",
        padding:"10px"
      });
    return(
        <>
       <div className="navbar">
       <NavLink to="/"  style={getActiveStyle}>Home</NavLink>
        <NavLink to="/allVideos"  style={getActiveStyle}> Videos</NavLink>
        <NavLink to="/likedVideos"  style={getActiveStyle}> Liked Videos ({countLikedVideos})</NavLink>
        <NavLink to="/watchLater"  style={getActiveStyle}> WatchLater ({ countWatchlaterVideos})</NavLink>
       </div>
        
        
        
        </>
    )
}