import React from 'react'

function prueba2() {
    const handleEvent = (evt)=>{

        if (evt.key==='a'||evt.key==='e'||evt.key==='i'||evt.key==='o'||evt.key==='u'){
            evt.preventDefault()
        }
    }
    return (
    <div>
        <input type={'text'} onKeyDown={handleEvent}></input>
    </div>
  )
}

export default prueba2