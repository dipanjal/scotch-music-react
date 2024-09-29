import { useState } from 'react';
import ScotchContainer from "./ScotchContainer.jsx";
import AudioContainer from "./core/AudioContainer.jsx";

export default function ScotchContainerWrapper({ children }) {
    const [{isBlurred, action}, setIsBlurred] = useState({
        isBlurred: true,
        action: "pause"
    });

    const playMusic = () => {
        if (!isBlurred) {
            setIsBlurred({ action: "play" });
        }
    }

    const pauseMusic = () => {
        if (!isBlurred) {
            setIsBlurred({ action: "pause" });
        }
    }

    const unblurAndPlay = () => {
        if (isBlurred) {
            setIsBlurred({
                isBlurred: false,
                action: "play"
            });
        }
    };

    return (
        <div 
            className={`scotch-wrapper ${isBlurred ? 'scotch-wrapper-blurred' : ''}`}
            onClick={unblurAndPlay}
            onMouseEnter={playMusic}
            onMouseLeave={pauseMusic}
        >
            <ScotchContainer />
            <AudioContainer action={action} />
            {children}
        </div>
    )
}
