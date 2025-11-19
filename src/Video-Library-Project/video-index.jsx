import { AddVideo } from './add-video';
import { DeleteVideo } from './delete-video';
import { EditVideo } from './edit-video';
import { UserDashboard } from './user-dashboard';
import { UserLogin } from './user-login';
import { UserRegister } from './user-register';
import { AdminLogin } from "./admin-login";
import { VideoHome } from "./video-home";
import { AdminDashboard } from "./admin-dashboard";
import '../Video-Library-Project/video-index.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function VideoIndex()
{
    return(
        <div className="bg-banner">
             <BrowserRouter>
                  <header className='text-center p-2 '>
                  <div className='fs-1 fw-bold '>
                    <Link to="/" className='btn btn-light'>
                           <span className='bi bi-house-door'></span>
                    </Link>Video Podcast</div>
                  <div>[Java,.NET,React]</div>
                </header>
                <section className='p-5'>
                <Routes>
                     <Route path='/' element={<VideoHome/>}/>
                     <Route path='admin-login' element={<AdminLogin/>}/>
                     <Route path='admin-dashboard' element={<AdminDashboard/>}/>
                      <Route path='add-video' element={<AddVideo />} />
                        <Route path='delete-video/:id' element={<DeleteVideo />} />
                        <Route path='edit-video/:id' element={<EditVideo />} />
                        <Route path='user-login' element={<UserLogin />} />
                        <Route path='user-register' element={<UserRegister />} />
                        <Route path='user-dashboard' element={<UserDashboard />} />
                </Routes>
               </section>
            </BrowserRouter>
        </div>
    )
}