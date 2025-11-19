export function Navbar(props)
{
return(
    <nav className={`d-flex ${props.theme} my-4 justify-content-between align-items-center border border-1 p-3`}>
        <div>
            <span className="fs-4 fw-bold">{props.brandName}</span>

        </div>
        <div>
            {
                props.menuItems.map(item=><span className="mx-4" key={item}>{item}</span>)
            }
        </div>
        <div>
            <button className="btn btn-danger bi bi-person-circle">
                Signin
            </button>
        </div>
    </nav>
)
}