import React, {useEffect} from "react";

const Navbar=({color})=>{
    useEffect(()=>{
        alert("Hey I will run on every render")
    })

    useEffect(()=>{
        alert("Hey I will run only when it is first of rendering of page")
    },[])

    useEffect(()=>{
        alert("Hey I running because the color was changed")
    },[color]) 

    useEffect(()=>{
        alert("Hey I will run only when it is first of rendering of page and return some message when a component is unmounted. Called as Cleanup function")
    return ()=>{
        alert("component was unmounted")
    }
},[])

    return(
        <div>I am a Navbar of color {color} </div>
    )
}
export default Navbar