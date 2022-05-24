import React, { useEffect, useState } from 'react'
import Header from './../components/Header'

const Book = () => {

    const[book, setBook]=useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book/${id}`)
        .then(response=>{
            console.log(response.data)
            setBook(response.data)
        })
        .catch(err=>console.log(err))
    })

  return (
    <div>
        {<Header/>}
            {
                book&&
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <p><img src={cover_art} alt="book cover" /></p>
                    <h3>{book.description}</h3>
                </div>
            }

    </div>
  )
}

export default Book