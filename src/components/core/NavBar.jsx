import Buttons from "./Button.jsx";


export default function NavBar({ children }) {
    return (
        <nav>
            <a href="#">CONTACT</a>
            <a href="#">ABOUT</a>
            <Buttons isNav={true} />
            {children}
        </nav>
    )
}
