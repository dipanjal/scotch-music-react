import { forwardRef } from "react";

const audioOnPause = () => {
    console.log("Music is Paused")
}

const audioOnPlay = () => {
    console.log("Music is Played")
}

const audioOnEnded = (e, loop= true) => {
    console.log("Music is ended")
    if (loop) {
        console.log("Music restarted")
        const audioPlayer = e.target
        audioPlayer.currentTime = 0
        audioPlayer.play()
    }
}

const AudioPlayer = forwardRef(({ loop = true }, ref) => {
    return (
        <audio controls
               className="audio-container-hidden"
               id="audio-player"
               ref={ref}
               onPlay={audioOnPlay}
               onPause={audioOnPause}
               onEnded={(e) => audioOnEnded(e, loop)}
        >
            <source
                src="https://pouch.jumpshare.com/preview/KYulVPaNAQKyAjcvCohtZDrgmBpsqJfaKsAC0KB8v2pc9EzYJYFb7G0cGcWXkcgpWJIOnWbQZgdC2EZ6AzKNHEBi_KNI9zBMUeo99KDVOzu15sUIgL_jNrVeGnE94bfdXTUd6xCp6gBi9kbcxN31sW6yjbN-I2pg_cnoHs_AmgI.mp3"
                type="audio/mp3"
            />
            Your browser does not support the audio element.
        </audio>
    );
});
AudioPlayer.displayName = "AudioPlayer"

export default AudioPlayer;
