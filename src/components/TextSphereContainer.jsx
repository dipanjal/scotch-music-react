import TextContainer from "./TextContainer.jsx";
import Sphere from "./core/Sphere.jsx";

function TextSphereContainer(prop) {
    return (
        <div className="text-sphere-container">
            {/*could pass child components like this*/}
            {/*<TextContainer> <Button/> </TextContainer>*/}
            {/*but I want to keep top containers as clean as possible*/}
            <TextContainer/>
            {/*A sphere with href is unusual, so leaving to the to component user, they can pass any url if they want*/}
            <Sphere href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y"/>
            {prop.children && prop.children}
        </div>
    )
}

export default TextSphereContainer