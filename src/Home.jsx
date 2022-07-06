import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Home = () => {

const [value,setValue]=useState();
const [exist,setExist]=useState();
const [api, setApi]=useState();


// Enter your Key to render it
const key='';


useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${exist?exist:'New York'}&appid=${key}&units=imperial`)
.then(function (response) {
    setApi(response.data)
})

},[exist])



    return (
    <>
    <form className=' form'>
        <input className= 'input' value={value} onChange={(e)=>{e.preventDefault(); setValue(e.target.value)}}placeholder='Enter a city' />
        <button className='button' onClick={(e)=>{e.preventDefault(); setExist(value)}}>Go</button>
    </form>
    <section>
        <p className='location'>{api?.name}, {api?.sys.country}</p>
        <p className='temp'>{api?.main.temp}</p>
        <p className='description'>{api?.weather[0].description}</p>
    </section>
    
    </>
    )
}

export default Home



