import { createContext, useContext, useState } from "react";

let userContext =createContext(null);
export function Level1()
{
    let context=useContext(userContext);
    return(
        <div className="bg-warning text-danger p-4">
            <h2>Level-1-{context}</h2>
            <Level2/>
        </div>
    )
}
export function Level2()
{
    let context=useContext(userContext);
    return(
        <div className="bg-danger text-white p-4">
            <h2>Level-2-{context}</h2>
        </div>
    )
}
export function ContextDemo()
{
    const[user,setUser]=useState('john');
    function handleNameChange(e)
    {
        setUser(e.target.value)
    }
    return(
        <div className="container-fluid bg-dark text-white p-4 m-4">
            <userContext.Provider value={user}>
                <div>
            
            <input type="text" onChange={handleNameChange} placeholder="userName"/>
            </div>
            <h1>Parent Component-{user}</h1>
            <Level1/>
            </userContext.Provider>

        </div>
    )
}