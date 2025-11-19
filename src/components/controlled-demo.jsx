import { Navbar } from "../controlledComponents/navbar";


export function ControlledDemo()
{
    return(
        <div className="container-fluid p-3">
            <header className="mt-3">
                <Navbar   theme='bg-warning' brandName='Amazon' menuItems={['Home','Shop','Offers','Contact','Business']}/>
                <Navbar theme='bg-dark text-white' brandName='Flipkart' menuItems={['Electronics','Fashion','Footware']}/>
                </header>
                <section className="mt-4">
                 <h3>Controlled Components</h3>
                </section>
                </div>
            
    )
}