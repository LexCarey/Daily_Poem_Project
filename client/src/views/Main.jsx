import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MostPopular from '../components/MostPopular/MostPopular'
import Quote from '../components/Quote/Quote'

const Main = () => {
    return (
        <div className='page'>
            <Header />
            <Quote />
            <MostPopular />
            <Footer />
        </div>
    )
}

export default Main