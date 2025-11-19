import { BrowserRouter, Link, Routes ,Route} from "react-router-dom";
import { ControlledDemo } from "./controlled-demo";
import { Weather } from "./weather1";

export function Home()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="text-center mt-3 p-3 border border-1 ">
                <h1>React Project-Home</h1>
                <nav>
                <span><Link  to="/weather">Weather API</Link></span>
                <span><Link  className="mx-4" to="/navbar">controlledDemo</Link></span>
                </nav>
            </header>
            <section className="mt-4">
                <Routes>
                    <Route path="/" element={<div>You vcan see Your Projects here..</div>}/>
                    <Route path="weather" element={<Weather/>}/>
                    <Route path="navbar" element={<ControlledDemo/>}/>
                    
                    <Route path="*" element={<div>Sorry Requsted Component not there..</div>}/>
                </Routes>
            </section>
            </BrowserRouter>
        </div>
    )
}