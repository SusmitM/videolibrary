
import { NavLink } from "react-router-dom"
export const Home=()=>{
    
    return(
        <>
      <div className="homeContainer">
      <h1 className="homeTitle">Welcome to CodeVerse</h1>
        <div className="introText">Click to explore CodeVerse and immerse yourself in the fascinating world of coding.</div>

        <NavLink to="/allVideos"><button>Explore Videos</button></NavLink>
      </div>
        
        </>
    )
}