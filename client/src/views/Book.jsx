import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

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
        <div className='page'>
            <Header/>
                {
                    book&&
                    <div style={{display: 'flex', margin: '0 auto', maxWidth: '1300px', padding: '25px'}}>
                        <img style={{height: '650px', marginRight: '15px'}} src={book.cover_art} alt="book cover" />
                        <div style={{textAlign: 'left', display: 'flex', flexFlow: 'column', justifyContent: 'end'}}>
                        <h1 style={{marginBottom: '15px', fontSize: '35px'}}>Title: {book.title}</h1>
                            <h3>Description:</h3>
                            <h3 style={{marginBottom: '15px'}}>{book.description}</h3>
                            <h3>Author: </h3>
                            <h2><a style={{color: 'black'}} href={`/authors/${book.author}`}>{book.author}</a></h2>
                        </div>
                    </div>
                }
                <Footer />
        </div>
    )
}

export default Book