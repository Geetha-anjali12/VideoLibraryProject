import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function FakestoreProducts()
{
    let params=useParams();
    const[products,setProducts]=useState([{id:0,title:null,description:null,image:'',price:0,rating:{rate:0,count:0}}])
    useEffect(()=>
    {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
            console.log(response.data);
        })
    },[params.category])
    return(
        <div>
            <h2>
                {params.category.toUpperCase()} PRODUCTS</h2>
                <div className="row">
                    <div className="col-9">
                        <div className="d-flex">
                            {
                    products.map(product=>
                    <div key={product.id} className="card m-2 p-1" style={{width:'150px'}}>

                    <div className="card-header" style={{height:'250px'}}>{product.title}</div>
                    <div>
                        <Link to={`details/${product.id}`} className="btn btn-primary w-100">Details</Link>
                    </div>
                    </div>
                    )
                    }
                    </div>
                <div>
                    <Link to="/">Back to categories</Link>
                    </div>
            </div>
            <div className="col-6">
               <Outlet/> 
            </div>
            </div>
            </div>
    )
}