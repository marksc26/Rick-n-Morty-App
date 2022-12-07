import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='locationInfo'>
        <h2><span>Name Dimension:</span>{location?.name}</h2>
        <ul>
            <li><span>Type:</span><br />{location?.type}</li>
            <li><span>Dimension:</span><br />{location?.dimension}</li>
            <li><span>Population:</span><br />{location?.residents.length}</li>
            
        </ul>

    </article>
  )
} 

export default LocationInfo