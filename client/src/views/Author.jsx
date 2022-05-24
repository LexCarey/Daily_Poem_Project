import React, { useEffect } from 'react'
import Header from './../components/Header'

const Author = () => {

    const[author, setAuthor]=useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response=>{
            console.log(response.data)
            setAuthor(response.data)
        })
        .catch(err=>console.log(err))
    })

  return (
    <div>
        {<Header/>}
        {
            author&&
            <div>
                <h1>{author.fullName}</h1>
                <p><img src={author.image} alt="author headshot" /></p>
                <h3>{author.about}</h3>
                <h3>{author.books}</h3>
            </div>
        }
    </div>
  )
}

export default Author