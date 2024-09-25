import { useState } from 'react';
import ScotchContainer from "./ScotchContainer.jsx";

function ScotchContainerWrapper({ children }) {
    const [isBlurred, setIsBlurred] = useState(true);

    const toggleBlur = () => {
        if (isBlurred) {
            setIsBlurred(false);
        }
    };

    return (
        <div 
            className={`scotch-wrapper ${isBlurred ? 'scotch-wrapper-blurred' : ''}`}
            onClick={toggleBlur}
        >
            <ScotchContainer isPlayable={!isBlurred}/>
            {children}
        </div>
    )
}

export default ScotchContainerWrapper