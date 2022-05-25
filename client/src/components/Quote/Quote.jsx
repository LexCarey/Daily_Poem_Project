import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Quote.css'

const Quote = () => {
    const [quote, setQuote] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/random-quote')
        .then(res => {
            setQuote(res.data[0])
            console.log(res.data[0])
        })
        .catch(err=>console.log(err))
    }, [])

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
            {
                quote&&
                <div className='quote-container'>
                    <p>“{quote.quote}”</p>
                    <h2>-<a href={`/authors/${quote.author}`}>{quote.author}</a>, <a href={`/books/${quote.book}`}>{quote.book}</a></h2>
                </div>
            }
        </div>
    )
}

export default Quote