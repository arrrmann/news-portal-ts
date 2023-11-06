import React, {useState, useEffect} from "react";

const TestCclasswork=()=>{
    const [width, setWidth]=useState(window.innerWidth)
    const [height, setHeight]=useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth) 
            setHeight(window.innerHeight)
        })
    }, [])

    return(
        <div>
            <div>
                Width:{width}
            </div>
            <div>
                Height:{height}
            </div>
        </div>
    )
}

export default TestCclasswork