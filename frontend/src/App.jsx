import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout_1 } from "./components/layouts/Layout_1";
import { Clients } from "./pages/Clients";
import { Products } from "./pages/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout_1 />}>
            <Route path="clientes" element={<Clients />} />
            <Route path="produtos" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
