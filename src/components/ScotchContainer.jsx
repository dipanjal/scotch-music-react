import NavBar from "./core/NavBar.jsx";
import MainContainer from "./MainContainer.jsx";

function ScotchContainer(prop) {
    return (
        <div className="scotch-container">
            <NavBar/>
            <MainContainer/>
            {prop.children && prop.children}
        </div>
    )
}

export default ScotchContainer