import   '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { VideoIndex } from './Video-Library-Project/video-index';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <VideoIndex/>
    
  </StrictMode>
)
