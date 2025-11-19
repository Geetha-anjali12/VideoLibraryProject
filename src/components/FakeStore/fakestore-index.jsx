import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakeStoreDetails } from "./fakestore-details";

export function FakestoreIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-2 text-center">
                    <div className="fs-2 fst-carlic">FakeStore-Shopping Online</div>
                </header>
                <section className="mt-5">
                <Routes>
                    <Route path="/" element={<FakestoreHome/>}/>
                    <Route path="products/:category" element={<FakestoreProducts/>}>
                        <Route path="details/:id" element={<FakeStoreDetails/>}/>
                    </Route>
                    <Route path="*" element={<><h1>Requested Path Not Found</h1></>}/>
                </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}