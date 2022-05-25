import React, {useEffect, useState} from 'react'
import './BookPrev.css'
import axios from 'axios'

const BookPrev = (props) => {
    const { title, cover_art } = props

    return (
        <div className='book-preview'>
            <div className='book-preview-img'>
                <a href={`/books/${title}`}><img src={cover_art} alt={title} /></a>
            </div>
            <h2><a href={`/books/${title}`}>{title}</a></h2>
        </div>
    )
}

export default BookPrev

//const [searchTerm, setSearchTerm]=useState()

// {
//     book.filter((eachbook)=>{
//         if(searchTerm==""){
//             return eachbook
//         }else if(eachbook.title.toLowerCase().includes(searchTerm.toLowercase())){
//             return eachbook
//         }
//     }).map((eachbook, i)=>{
//         return(
//             <div key={i}>
//                 {eachbook.title}
//             </div>
//         )
//     })
// }