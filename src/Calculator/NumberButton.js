import React from 'react'

const style = {
    margin:0,
    display:'flex', 
    justifyContent:'center', 
    alignItems: 'center',
    // width:'30px', 
    // height: '30px', 
    backgroundColor: 'yellow', 
    border: '1px solid black'
}

export default function NumberButton({num,setResult}) {
    
    // const 

    return (
        <span style={style} onClick={()=> setResult(num)}>
            {num}
        </span>
    )
}