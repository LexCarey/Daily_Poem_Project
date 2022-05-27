import React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
//import dropdown from "bootstrap/dist/css/bootstrap.css"
//className={dropdown}
import './DropDown.css'

const DropDown = () => {

    const showDropDown = () => {
        document.getElementById("dropdown").style.display = "block"
        document.getElementById("gren").style.backgroundColor = "#687d6e"
    }
    const stopDropDown = () => {
        document.getElementById("dropdown").style.display = "none"
        document.getElementById("gren").style.backgroundColor = "transparent"
    }

    return (
        <div id='gren'>
            <img style={{height: '30px'}} src='http://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.png' onMouseEnter={showDropDown} onMouseLeave={stopDropDown} />
            <div onMouseEnter={showDropDown} onMouseLeave={stopDropDown} id='dropdown' className='dropdown'>
                <p><a href='/'>Home</a></p>
                <p><a href='/about'>About</a></p>
                <p><a href='/contact'>Contact</a></p>
            </div>
        </div>
    )
}

export default DropDown

{/* <NavDropdown.Item href="/">Home</NavDropdown.Item>
<NavDropdown.Item href="/about">About</NavDropdown.Item>
<NavDropdown.Item href="/contact">Contact</NavDropdown.Item> */}