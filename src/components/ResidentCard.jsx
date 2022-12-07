import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({urlResident}) => {

    const [resident, setResident] = useState()

    useEffect(() =>{
        axios.get(urlResident)
         .then(res => setResident(res.data) )
         .catch(err => console.log(err))

    }, [])

  return (
    <article className='resident'>
        
        <header>
            <img className='imgresident' src={resident?.image} alt="" />
            <div className='status'>
                <div className={`circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section className='infoResident'>
            <h2>{resident?.name}</h2>
            
            <ul className='list'>
                <li><span>Specie <br /></span>{resident?.species}</li>
                <li><span>Origin <br /></span>{resident?.origin.name}</li>
                <li><span>Episodes <br /></span>{resident?.episode.length}</li>
            </ul>
        </section>

    </article>
  )
}

export default ResidentCard