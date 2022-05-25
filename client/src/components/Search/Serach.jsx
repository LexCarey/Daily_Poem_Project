import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Serach = () => {

    const [book, setBook]=useState()
    const [searchTerm, setSearchTerm]=useState()

    useEffect(()=>{
        axios.get(`http://localhos:8000/api/book`)
        .then(response=>{
            console.log(response.data)
            setBook(response.data)
        })
        .catch(err=>console.log(err))
    })

  return (
    <div>
        <input type="text" placeholder='Search' onChange={e=>setSearchTerm(e.target.value)} />
        {
        book.filter((eachbook)=>{
            if(searchTerm==""){
                return eachbook
            }else if(eachbook.title.toLowerCase().includes(searchTerm.toLowercase())){
                return eachbook
            }
        }).map((eachbook, i)=>{
            return(
                <div key={i}>
                    {eachbook.title}
                </div>
            )
        })
    }
    </div>
  )
}

export default Serach