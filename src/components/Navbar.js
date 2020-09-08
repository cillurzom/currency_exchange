import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import Link from "next/link";


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Exchange Rates </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;