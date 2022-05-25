import React, { useEffect, useState } from 'react'
import BookPrev from '../BookPrev/BookPrev'
import './MostPopular.css'
import axios from 'axios'

const MostPopular = () => {
    const [books, setBooks]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book`)
        .then(res=>{
            setBooks(res.data)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <h2>MOST POPULAR</h2>
            <div className='most-popular'>
                {
                    books.map((book, i) => 
                        <BookPrev title={book.title} cover_art={book.cover_art} />
                    )
                }
            </div>
        </div>
    )
}

export default MostPopular