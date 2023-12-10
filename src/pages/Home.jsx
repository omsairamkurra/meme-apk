import React,{useEffect, useState} from 'react'
import MemeCard from '../components/Card'
import { getAllMemes } from '../api/memes'

const HomePage = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    getAllMemes().then((memes)=>
      setData(memes.data.memes))
  },[]);

  return (
    <div className='d-flex row justify-content-center align-items-center'>
      {data.map((el)=>(
        <MemeCard key={el.id} img={el.url} title={el.name} />
      ))}
        
    </div>
  )
}

export default HomePage