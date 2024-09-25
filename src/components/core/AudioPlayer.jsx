function AudioPlayer() {
    return (
        <audio className="audio-container" id="audio-player" controls autoPlay>
            <source
                src="https://pouch.jumpshare.com/preview/KYulVPaNAQKyAjcvCohtZDrgmBpsqJfaKsAC0KB8v2pc9EzYJYFb7G0cGcWXkcgpWJIOnWbQZgdC2EZ6AzKNHEBi_KNI9zBMUeo99KDVOzu15sUIgL_jNrVeGnE94bfdXTUd6xCp6gBi9kbcxN31sW6yjbN-I2pg_cnoHs_AmgI.mp3"
                type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    )
}

export default AudioPlayer