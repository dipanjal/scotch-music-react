import Button from "./core/Button.jsx";

function TextContainer(prop) {
    return (
        <div className="text-container">
            <h1>Scotch</h1>
            <h2>VIDEOCASSETTE EG</h2>
            <h3>T 120</h3>
            <p>Designed by the inventors of videotape, this Scotch EG Videocasette gives your superior
                performance</p>
            {/*This button also could be passed via children*/}
            <Button />
            {/*making room for, if any child component passed */}
            {prop.children && prop.children}
        </div>
    )
}

export default TextContainer