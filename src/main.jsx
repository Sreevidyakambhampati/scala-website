import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "swiper/css";
import "swiper/css/navigation";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 4000,
      style: {
        background: "#fff",
        color: "#0B1B34",
        borderRadius: "16px",
        padding: "18px",
        boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
      },
    }}
  />
  </StrictMode>,
)
