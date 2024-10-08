import { TbShoppingBagSearch } from "react-icons/tb";

const Searchbar = () => {
  return (
    <div className="w-96 m-4 flex items-center justify-between border-2 bg-white px-2 rounded-md drop-shadow-xl ">
      <input
        className="focus:outline-none bg-inherit px-2 py-2 focus:border-none w-full"
        placeholder="Search for the product"
      />
      <TbShoppingBagSearch className="text-xl" />
    </div>
  );
};

export default Searchbar;
