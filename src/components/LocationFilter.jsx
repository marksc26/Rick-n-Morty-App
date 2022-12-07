import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({ locationName, getNewLocation, setIsShowList, isShowList }) => {

  const [locationOptions, setLocationOptions] = useState()

  useEffect(() => {
    if (!locationName) return setLocationOptions()
    const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`

    axios.get(URL)
      .then(res => setLocationOptions(res.data.results))
      .catch(err => console.log(err))

  }, [locationName])

  const handleClick = (locationOption) => {
    getNewLocation(locationOption.url, locationOption.name)
    setIsShowList(false)

  }




  return (
    <div className='options-container'>
      {
        isShowList && (
          <ul className='options'>
            {
              locationOptions?.map(locationOption => <li onClick={() => handleClick(locationOption)} key={locationOption.url}>{locationOption.name}</li>)
            }
          </ul>
        )
      }


    </div>

  )
}

export default LocationFilter