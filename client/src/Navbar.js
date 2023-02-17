function NavBar() {
    return (
        <nav>            
            <ul style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}>
                <li>
                <img style={{ height: "25px", paddingRight: "17px" }} src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"></img>
                </li>
                <li style={{ paddingRight: "7px" }}>
                    Home
                </li>
                <li style={{  paddingRight: "7px" }}>
                   About
                </li>
                <li style={{  paddingRight: "7px" }}>
                   Contact
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;