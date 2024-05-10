import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-7xl mx-auto my-10">
        <Outlet></Outlet>
      </main>
      <Footer className="mt-10"></Footer>
    </>
  );
};

export default Root;
