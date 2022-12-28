import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout_1 } from "./components/layouts/Layout_1";
import { Clients } from "./pages/Clients";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout_1 />}>
          <Route path="clientes" element={<Clients />} />
          <Route path="produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
