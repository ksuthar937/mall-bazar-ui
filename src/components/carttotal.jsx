const Carttotal = () => {
  return (
    <div className="mt-4 p-4 shadow-lg rounded-lg bg-slate-300">
      <h3 className="text-xl pb-2">Cart Total</h3>
      <div className="flex justify-between">
        <p className="opacity-60">Cart Subtotal</p>
        <p className="font-semibold">$70.5</p>
      </div>
      <div className="flex justify-between">
        <p className="opacity-60">Discount</p>
        <p className="font-semibold">-$10.5</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Total</p>
        <p className="font-semibold text-xl">$60.5</p>
      </div>
      <button className="bg-amber-300 w-full py-2 mt-6 rounded-full uppercase hover:bg-yellow-500 ">
        Place Order
      </button>
    </div>
  );
};

export default Carttotal;
