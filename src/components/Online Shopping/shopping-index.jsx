import { useState } from "react";
import { ShoppingProducts } from "./shopping-products";
export function ShoppingIndex()
{
    const[cartItems]=useState([]);
    const[cartItemsCount,setCartItemsCount]=useState();
    function handleAddCartToClick(e)
    {
        cartItems.push(e);
        alert(`${e.title}\nAdded to cart`);
        setCartItemsCount(cartItems.length)
    }
    return(
        <div ClassName="container-fluid">
            <header className="d-flex justify-content-between p-2 border border-1 mt-3">
                
                <div className="fs-4 fw-bold">Shopping</div>
                <nav>
                    <div className="input-group">
                        <input type="text" placeholder="Search Shopping" className="form-control"/>
                        <button className="bi bi-search btn btn-warning"></button>

                    </div>
                    
                </nav>
                <div>
                    <button data-bs-toggle="offcanvas" data-bs-target="#cart" className="btn btn-warning bi bi-cart4 position-relative">Your Cart<span className="badge position-absolute bg-danger text-white rounded rounded-circle">{cartItemsCount}</span></button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                        <h2>Your Cart Items</h2>
                        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=>
                                        <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td><img src={item.image} width="50" height="50"></img>
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
        
            <section>
             <ShoppingProducts addToCart={ handleAddCartToClick}/></section>
        </div>
        
    )
}