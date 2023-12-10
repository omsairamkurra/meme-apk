import React, { useState } from 'react'
import Draggable from 'react-draggable'
const Text = () => {
    const [editMode,setEditMode]=useState(false)
    const [val,setVal]=useState("Double Click to Edit")

    const handleDoubleClick = () => {
        if (!editMode) {
          setVal("")
        }
        setEditMode(!editMode);
      };
  return (
    <Draggable>
       {
        editMode?(
            <input onBlur={()=>setEditMode(false)}  value={val} onChange={(e)=>setVal(e.target.value)} autoFocus/>
        ):(
            <h1 onDoubleClick={handleDoubleClick}>{val}</h1>
        )
       }
    </Draggable>
  )
}

export default Text