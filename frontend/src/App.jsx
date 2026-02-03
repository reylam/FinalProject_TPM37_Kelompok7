import { BrowserRouter } from "react-router-dom";
import Register from "./Pages/Register";

export default function App() {
  return(
    <>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}
