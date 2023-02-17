function NavBar() {
    return (
        <nav>
            <ul style={{ display: "flex", flexDirection: "row", listStyleType: "none", alignItems: "center", justifyConten: "center" }}>
                <li>
                    <img style={{ height: "25px", paddingRight: "17px", paddingTop: "5px" }} src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"></img>
                </li>
                <li>
                    Bug App
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;