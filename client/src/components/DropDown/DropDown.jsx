import React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
//import "bootstrap/dist/css/bootstrap.css"

const DropDown = () => {
    return (
        <Nav>
            <NavDropdown title="here lex">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item href="/something">Something</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default DropDown