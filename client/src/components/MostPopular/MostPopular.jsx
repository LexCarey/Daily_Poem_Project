import React from 'react'
import BookPrev from '../BookPrev/BookPrev'
import './MostPopular.css'

const MostPopular = () => {


    return (
        <div>
            <h2>MOST POPULAR</h2>
            <div className='most-popular'>
                <BookPrev />
            </div>
        </div>
    )
}

export default MostPopular