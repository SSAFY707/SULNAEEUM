import React from 'react'





export default function Map(props) {

    const {list, setTitle} = props

    return (
    <>  
        {list.map((item:any, index:number)=> {
            return <>
                <div key={index} onClick={()=> {
                    alert('itme.id : ' + item.region )
                    setTitle(item.region)
                    
                }}>
                    {item.id} : {item.region}
                </div>
            </>
        })}    
    </>
  )
}
