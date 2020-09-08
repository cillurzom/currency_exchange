import React from "react";
import NavBar from "./Navbar";
import Container from "react-bootstrap/Container"

const Layout = ({children}) => (
    <div>
        <NavBar />
        <Container className={"mt-2"}>
            {children}
        </Container>
    </div>
);

export default Layout;