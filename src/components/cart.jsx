import { useSelector } from "react-redux";
import Cartcard from "./cartcard";
import Shipping from "./shipping";
import Carttotal from "./carttotal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="bg-gray-100 h-screen p-10 ">
      <div>
        <h2 className="font-bold text-2xl">Shopping Bag</h2>
        <p>
          <span className="font-bold">
            {cartItems.length}
            {cartItems.length > 1 ? " items" : " item"}
          </span>{" "}
          in your bag
        </p>
      </div>
      <div className="grid gap-20 grid-cols-3 mt-6">
        <div className="col-span-2">
          <div className="shadow-lg rounded-lg p-8 bg-white">
            {cartItems.map((item) => (
              <Cartcard key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div>
          <Shipping />
          <Carttotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
