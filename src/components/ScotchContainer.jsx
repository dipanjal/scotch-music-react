import NavBar from "./core/NavBar.jsx";
import MainContainer from "./MainContainer.jsx";

export default function ScotchContainer({ children }) {
    return (
        <div className="scotch-container">
            <NavBar/>
            <MainContainer/>
            { children }
        </div>
    )
}
