import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div class='contain flex'>
                    <div className='left-footer flex'>
                        <div className='opus-tm'><h1>Opus™</h1></div>
                        <div>
                            <div className='flex about'>
                                <p>About</p>
                                <p>FAQs</p>
                                <p>Support</p>
                            </div>
                            <div>
                                <p>©2022 Opus. No Rights Reserved</p>
                                <span><p>This just makes it look legit lol</p></span>
                            </div>
                        </div>
                    </div>
                    <div className='right-footer flex'>
                        <div className='opus-tm'>
                            <p>Co-Founder Lexington Carey Contact</p>
                            <p>LexCarey73@gmail.com</p>
                        </div>
                        <div>
                            <p>Co-Founder Logan Erspamer Contact</p>
                            <p>LoganErspamer@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-spacer'></div>
        </div>
    )
}

export default Footer