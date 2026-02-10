import {Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./Pages/Register";



export default function App() {
  return <>{/* ini buat routernya */
 
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>} />
    </Routes>

  }</>;
}
