import React from 'react';
import Search from '../Search/Search';
import './Header.css';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <div className='navbar'>
                <div class='contain'>
                    <div>
                        <h1><a className='opus' href="/">Opus</a></h1>
                    </div>
                    <div className='options'>
                        <h3 className='store-links'><a href="/store">Store</a> / <a href="/feed">Feed</a></h3>
                        <Search />
                    </div>
                    <Nav>
                        <NavDropdown title="here lex">
                            <NavDropdown.Item href="/about">About</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </div>
            <div className='spacer'>
            </div>
        </div>
    )
}

export default Header

// <input type="text" placeholder='Search' />
