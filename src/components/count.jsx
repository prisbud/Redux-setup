import React from "react"
import { UseSelector, useSelector } from "react-redux"
const Count=()=>{
    const Count=useSelector(state=>state)
    return(
        <div>
            {Count}
        </div>
    )
}

export default Count