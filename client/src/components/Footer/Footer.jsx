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
                                <a href="/about">About</a>
                                <p>FAQs</p>
                                <a href="/contact">Contact</a>
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
                            <div className='socials'>
                                <a target="_blank" href="https://github.com/LexCarey"><img src="https://arturbien.github.io/3D-image/assets/github.jpg" alt="github" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/lexington-carey/"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" alt="linked in" /></a>
                                <a target="_blank" href="https://www.instagram.com/akuadrowned/"><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png" alt="instagram" /></a>
                            </div>
                        </div>
                        <div>
                            <p>Co-Founder Logan Erspamer Contact</p>
                            <p>LoganErspamer@gmail.com</p>
                            <div className='socials'>
                                <a target="_blank" href="https://github.com/LoganBErspamer"><img src="https://arturbien.github.io/3D-image/assets/github.jpg" alt="github" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/logan-erspamer/"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" alt="linked in" /></a>
                                <a target="_blank" href="https://www.instagram.com/logan.erspamer/"><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png" alt="instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-spacer'></div>
        </div>
    )
}

export default Footer