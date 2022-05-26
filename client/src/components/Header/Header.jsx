import React from 'react';
import DropDown from '../DropDown/DropDown';
import Search from '../Search/Search';
import './Header.css';

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
                        <DropDown />
                    </div>
                </div>
            </div>
            <div className='spacer'>
            </div>
        </div>
    )
}

export default Header

// <input type="text" placeholder='Search' />
