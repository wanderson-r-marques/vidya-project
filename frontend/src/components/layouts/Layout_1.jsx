import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export const Layout_1 = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
};
