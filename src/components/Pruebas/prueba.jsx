import React from 'react'

function prueba() {
    useEffect(()=>{
        fetch('https://eldenring.fanapis.com/api/weapons')
            .then(req=>{console.log(req)
                return req.json()
            })
            .then(req=>{
                return console.log(req)
               // return console.log(req.data.map((item)=>item.image))
            })
            .catch(
                err=>{
                    return console.log('esto es un error')
                }
            )

        })
    
  return (
    <div></div>
  )
}

export default prueba