import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard"; 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route untuk halaman lain nanti */}
        <Route path="/" element={<div>Landing Page</div>} />
        
        {/* Route khusus Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}