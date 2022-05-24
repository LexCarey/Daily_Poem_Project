import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='navbar'>
                <div class='contain'>
                    <div>
                        <h1>Book Club</h1>
                    </div>
                    <div className='options'>
                        <h3><a href="/store">Store</a> / <a href="/feed">Feed</a></h3>
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
            <div className='spacer'>
            </div>
        </div>
    )
}

export default Header