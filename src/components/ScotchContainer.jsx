import { useRef, useEffect, useCallback } from "react";

import NavBar from "./core/NavBar.jsx";
import MainContainer from "./MainContainer.jsx";
import AudioPlayer from "./core/AudioPlayer.jsx";

function ScotchContainer({ isPlayable = false, children }) {
    const audioRef = useRef(null); // Create a ref for the audio element

    const playMusic = useCallback(() => {
        if (isPlayable && audioRef.current) {
            audioRef.current.play().catch(e => console.log(e));
        }
    }, [isPlayable]);

    const pauseMusic = useCallback(() => {
        if (isPlayable && audioRef.current) {
            audioRef.current.pause()
        }
    }, [isPlayable]);

    useEffect(() => {
        playMusic();
    }, [playMusic]);


    return (
        <div className="scotch-container"
             onMouseEnter={playMusic}
             onMouseLeave={pauseMusic}
        >
            <NavBar/>
            <MainContainer/>
            <AudioPlayer ref={audioRef} />
            { children }
        </div>
    )
}

export default ScotchContainer