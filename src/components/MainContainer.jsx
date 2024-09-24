import TextSphereContainer from "./TextSphereContainer.jsx";
import LearnMore from "./core/LearnMore.jsx";

function MainContainer(prop) {
    return (
        <div className="main-container">
            <TextSphereContainer/>
            <LearnMore/>
            {prop.children && prop.children}
        </div>
    )
}

export default MainContainer