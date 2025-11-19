import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function FakestoreHome()
{
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
            console.log(response.data)
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Home
            </h2>
           <ul className="list-unstyled fs-4">
                {categories.map(category => (
                    <li key={category} className="my-2 bg-dark  p-2 w-25">
                        <Link 
                            className="text-decoration-none text-dark text-white" 
                            to={`/products/${category}`}
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}