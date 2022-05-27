import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const contact = () => {
  return (
    <div className='page'>
        <Header />
        <div style={{maxWidth: '1000px', margin: '75px auto'}}>
          <h1>Contacts</h1>
          <h3>Feel free to contact us at these emails to leave suggestions and ideas for the website, as well as any bugs.</h3>
          <br/>
          <h1>Senior Devs</h1>
          <h3 style={{fontStyle: 'italic'}}>LoganErspamer@gmail.com</h3>
          <h3 style={{fontStyle: 'italic'}}>LexCarey73@gmail.com</h3>
          <br/>
          <h1>Purchase Support</h1>
          <h3>For infromation reguarding refunds, lost packages, and purchase queries, contact us at:</h3>
          <h3>OpusSupport@gmail.com</h3>
        </div>
        <Footer />
    </div>
  )
}

export default contact
