import { useCallback, useEffect, useRef } from "react";
import AudioPlayer from "./AudioPlayer.jsx";

export default function AudioContainer({ action = "pause" }) {
    const audioRef = useRef(null); // Create a ref for the audio element

    const playMusic = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log(e));
        }
    }, []);

    const pauseMusic = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
    }, []);

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
        </div>
    )
}
