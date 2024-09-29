import { useCallback, useEffect, useRef } from "react";

// import NavBar from "./NavBar.jsx";
// import MainContainer from "../MainContainer.jsx";
import AudioPlayer from "./AudioPlayer.jsx";

export default function AudioContainer({ isPlayable = false, action = "pause", children }) {
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
        if (action === "play") {
            playMusic();
        } else if (action === "pause") {
            pauseMusic();
        }
    }, [playMusic, pauseMusic, action]);


    return (
        <div className="audio-container">
            <AudioPlayer ref={audioRef} />
            { children }
        </div>
    )
}