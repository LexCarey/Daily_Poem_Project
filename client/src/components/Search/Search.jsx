import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Search.css'

const Search = () => {

    const [books, setBooks]=useState([])
    const [searchTerm, setSearchTerm]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book`)
        .then(response=>{
            console.log(response.data)
            setBooks(response.data)
        })
        .catch(err=>console.log(err))
    }, [])

    const searchHandler = (content) => {
        setSearchTerm(content)
        if (searchTerm != "") {
            document.getElementById(".search-bar").style.borderRadius = "30px 30px 0 0"
        } else {
            document.getElementById(".search-bar").style.borderRadius = "50px"
        }
    }

    return (
        <div>
            <input id='search-bar' className='search-bar' value={searchTerm} type="text" placeholder='Search' onChange={e=>searchHandler(e.target.value)} />
            <div className='autofill'>
                {
                books.filter((eachbook)=>{
                    if(searchTerm==""){
                        return
                    }else if(eachbook.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return eachbook
                    }
                }).slice(0, 5).map((eachbook, i)=>{
                    return(
                        <div key={i} className="result">
                            <a href={`/books/${eachbook.title}`}>{eachbook.title}</a>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Search