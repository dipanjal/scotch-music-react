import Buttons from "./Button.jsx";


function NavBar({ children }) {
    return (
        <nav>
            <a href="#">CONTACT</a>
            <a href="#">ABOUT</a>
            <Buttons isNav={true} />
            {children}
        </nav>
    )
}
export default NavBar