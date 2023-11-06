import React, {useState, useEffect} from 'react'

export const TestComponent=({setIsMounted}:any)=>{
    const [count, setCount]= useState(0)

    console.log('RENDER')

    useEffect(()=>{
        console.log('Mounted')

        return()=>{
            console.log('Unmounted [!]')
        }
    }, [])

    useEffect(()=>{
        console.log('UPDATE EVERY TIME  CUZ MISSING 2ND PARAMETR')
    })
    
    useEffect(()=>{
        console.log('Updated (follow count state)')
    },[count])

    return(
        <div>
            <div>
                <h1 id='randomId'>Counter</h1>
                <button onClick={()=>setCount(count+1)}>Click me!!!</button>
                <button onClick={()=>setIsMounted(false)}>Unmount the component</button>
            </div>
        </div>
    )
}