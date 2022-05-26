import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Author = () => {
    const[author, setAuthor]=useState()
    const { name } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${name}`)
        .then(response=>{
            console.log(response.data)
            setAuthor(response.data)
        })
        .catch(err=>console.log(err))
    })

    return (
        <div className='page'>
            <Header/>
            {
                author&&
                <div style={{display: 'flex', margin: '0 auto', maxWidth: '1300px', padding: '25px'}}>
                    <img style={{height: '650px', marginRight: '15px'}} src={author.image} alt="author headshot" />
                    <div style={{textAlign: 'left', display: 'flex', flexFlow: 'column', justifyContent: 'end'}}>
                        <h1 style={{marginBottom: '15px', fontSize: '35px'}}>Name: {author.fullName}</h1>
                        <h3>About:</h3>
                        <h3 style={{marginBottom: '15px'}}>{author.about}</h3>
                        <h3>Books on Opus: </h3>
                        {
                                author.books.map((book, i) => 
                                    <h3><a style={{color: 'black'}} href={`/books/${book}`}>{book}</a></h3>
                                )
                            }
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}

export default Author