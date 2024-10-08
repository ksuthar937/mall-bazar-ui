import { Outlet } from "react-router";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
