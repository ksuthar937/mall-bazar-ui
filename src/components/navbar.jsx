import { BsCartCheckFill } from "react-icons/bs";
import { MdLocalMall } from "react-icons/md";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-400 p-4 flex justify-between ">
      <div
        className="flex items-center gap-2 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <BsCartCheckFill className="text-yellow-400 text-3xl" />
        <h1 className="font-sans font-bold text-3xl text-white">MALL BAZAR</h1>
      </div>

      <div className="hover:cursor-pointer" onClick={() => navigate("/cart")}>
        <MdLocalMall className="text-white text-3xl" />
      </div>
    </nav>
  );
};

export default Navbar;
