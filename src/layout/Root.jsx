import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-7xl mx-auto my-10 px-2 md:px-0">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
