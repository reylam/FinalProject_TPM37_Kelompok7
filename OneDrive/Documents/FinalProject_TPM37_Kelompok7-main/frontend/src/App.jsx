import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login"; 
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl">404 | Not Found</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

<Route path="/signup" element={<SignUp />} />