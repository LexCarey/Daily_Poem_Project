import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'

const Book = () => {
    const[book, setBook]=useState()
    const { title } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book/${title}`)
        .then(response=>{
            console.log(response.data)
            setBook(response.data)
        })
        .catch(err=>console.log(err))
    })

    return (
        <div>
            <Header/>
                {
                    book&&
                    <div>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <p><img src={book.cover_art} alt="book cover" /></p>
                        <h3>{book.description}</h3>
                    </div>
                }
        </div>
    )
}

export default Book