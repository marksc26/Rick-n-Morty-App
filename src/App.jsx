import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'
import rickandmorty from './assets/img/rickandmorty.png'
import rmback from './assets/img/rmback.jpg'




function App() {

  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)
  const [isShowList, setIsShowList] = useState(false)
  
  const getDataDimension = (idDimension) =>{
    if(idDimension){
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => { setShowError(true)
        setTimeout(() =>{
          setShowError(false)
          
        }, 3000)

        console.log(err)
      })
    } else{
      alert("Ingrese un valor")
    }
    

  }

  useEffect(() =>{
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])

  

  const handleSubmit = (event) => {
    event.preventDefault()
    const dimensionSearch = event.target.searchValue.value
    getDataDimension(dimensionSearch)
    
  }

  const handleChangeInput = (event) =>{
    setLocationName(event.target.value)
    setIsShowList(true)

  }

  const getNewLocation = (URL, name) =>{
    setLocationName(name)
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
    
    
  }

  useEffect(() =>{

    if(locationName === "") setIsShowList(false)

  }, [locationName])

  

  return (

    
    <div className="App">
      

      <div className='wallpaperHeader'>
          <img  className='logorym' src={rickandmorty} alt="" />
      </div>


      <form className='form' onSubmit={handleSubmit}>
            <input id="searchValue" value={locationName} type="text" onChange={handleChangeInput} placeholder='Search a dimension' />
            <button type='submit'><i class='bx bx-search-alt-2'></i></button>
            {
              showError ? <ErrorMessage/> : ""
            }
      </form>

        <LocationFilter  
          locationName={locationName}  
          getNewLocation={getNewLocation} 
          setIsShowList={setIsShowList} 
          isShowList={isShowList}
        />
       <LocationInfo location={location}/>
       <ResidentList location={location}/>
    </div>
  )
}

export default App
