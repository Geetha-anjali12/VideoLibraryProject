import {useState} from "react"
export function UserDashboard()
{
    const[username,setUserName]=useState(null);
    function handleNameChange(e)
    {
        setUserName(e.target.value);//update the value
    }
    function handleSignInClick()
    {
     window.localStorage.setItem("uname",username);
     window.location.reload();
    }
   function handleSignOutClick()
    {
     window.localStorage.removeItem("uname");
     window.location.reload();
    }
    return(
        <div className="container-fluid">
          <header className="d-flex align-items-center justify-content-between p-3 border border-1 mt-3">
            <div className="fs-4  fw-bold fst-italic ">Amazon</div>
            <div >
                <span>Home</span>
                <span className="mx-4">Shop</span>
                <span>Offers</span>
            </div>
            
            
        <div>
            {
                  (window.localStorage.getItem("uname")===null)?
                 <div className="input-group">
                         <input type="text" placeholder="userName" onChange={handleNameChange} className="form-control"/>
                         <button onClick={handleSignInClick} className="btn btn-danger bi bi-person-circle">SignIn</button>
                 </div>
                  :
                <div>
                         <span className="fw-bold fs-5">{window.localStorage.getItem("uname")}</span>
                         <button onClick={handleSignOutClick} className="btn btn-danger mx-2">SignOut</button>
            
                </div>
        }
        </div>
        </header>  
        </div>
    )
}