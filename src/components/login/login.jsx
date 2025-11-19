import { useEffect, useState } from "react"

export function Login(){
    const[usename, setUsername] = useState("hello")

    useEffect(()=>{
        setUsername("hello world")
        console.log("hello world")
    },[])
    return(
      <p>{usename}</p>  
    )
}