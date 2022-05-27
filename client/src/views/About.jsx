import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const about = () => {
  return (
    <div className='page'>
      <Header />
      <div style={{maxWidth: '1000px', margin: '75px auto'}}>
        <h1>About Opus</h1>
        <h3>Opus is the cumulative work of creators Logan Erspamer and Lexington Carey in an effort to create a multifunctional user orientated web page. Opus is an eCommerce and social media platform wrapped into one. This is in an effort to provide ease of use and convience to the guests. The users can shop around for books and also make posts that can range from things such as reviews, thoughts, and wishlists of books. This allows our users to be able to get in depth reviews written by other Opus users about books they are curious about, letting new users find their next interesting read.</h3>
        <br/>
        <h1>In the Works</h1>
        <p>This project is still in its alpha release. Stay tuned for more information of what is to come.</p>
        <h3>Integrating a login and registration to allow users to create accounts and follow eachother's feed.</h3>
      </div>
      <Footer />
    </div>
  )
}

export default about
