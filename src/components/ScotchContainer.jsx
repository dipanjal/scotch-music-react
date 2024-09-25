import {useRef} from "react";

import NavBar from "./core/NavBar.jsx";
import MainContainer from "./MainContainer.jsx";
import AudioPlayer from "./core/AudioPlayer.jsx";

function ScotchContainer(prop) {
    const audioRef = useRef(null); // Create a ref for the audio element

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch( e => console.log(e))
        }
    }

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
    }

    return (
        <div className="scotch-container"
             onMouseEnter={playMusic}
             onMouseLeave={pauseMusic}
        >
            <NavBar/>
            <MainContainer/>
            <AudioPlayer ref={audioRef} />
            {prop.children && prop.children}
        </div>
    )
}

export default ScotchContainer