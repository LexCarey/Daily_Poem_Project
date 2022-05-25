import React from 'react'
import './Quote.css'

const Quote = () => {

    

    //OPACITY WHEN SCROLLING
    const checkpoint = 380;
    let opacity = 1
    
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".quote").style.opacity = opacity;
    });

    return (
        <div className='quote' id='quote'>
            <p>“It does not do to dwell on dreams and forget to live.”</p>
            <h2>-<a href="/author/J.K. Rowling">J.K. Rowling</a>, <a href="/book/Harry Potter and the Sorcerer's Stone">Harry Potter and the Sorcerer's Stone</a></h2>
        </div>
    )
}

export default Quote