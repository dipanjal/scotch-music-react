import NavBar from "./core/NavBar.jsx";
import MainContainer from "./MainContainer.jsx";
import AudioPlayer from "./core/AudioPlayer.jsx";

function playMusic() {
    console.log("Play Music")
}

function pauseMusic() {
    console.log("Pause Music")
}




function ScotchContainer(prop) {
    return (
        <div className="scotch-container"
             onMouseEnter={playMusic}
             onMouseLeave={pauseMusic}
        >
            <NavBar/>
            <MainContainer/>
            <AudioPlayer />
            {prop.children && prop.children}
        </div>
    )
}

export default ScotchContainer