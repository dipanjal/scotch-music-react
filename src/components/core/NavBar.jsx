import Buttons from "./Button.jsx";


function NavBar() {
    return (
        <nav>
            <a href="#">CONTACT</a>
            <a href="#">ABOUT</a>
            <Buttons isNav={true} />
        </nav>
    )
}
export default NavBar