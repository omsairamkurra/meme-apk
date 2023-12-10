import { Button } from 'react-bootstrap'
import React, { useState,createRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'
import {exportComponentAsJPEG} from "react-component-export-image"

const EditPage = () => {
    const [count,setCount]=useState(0)
    const memeRef=createRef()

    const addText = ()=>{
        setCount(count+1)
    }

    const [params]=useSearchParams()
    const imgUrl=params.get('url')
  return (
    <div>
        <div style={{height:"300px",width:"700px", border:"1px solid"}} ref={memeRef} className='meme mt-3 mb-3'>
            {imgUrl && <img alt ="meme" src={decodeURIComponent(imgUrl)} width="250px" className='m-2'/>}
            {Array(count).fill(0).map((e)=>(
                <Text/>
            ))}
        </div>
        <Button className='m-1' onClick={addText}>Add Text</Button>
        <Button variant="success" onClick={(e)=>exportComponentAsJPEG(memeRef)}>Save</Button>

    </div>
    
  )
}

export default EditPage