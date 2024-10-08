const Shipping = () => {
  return (
    <div className="p-4 shadow-lg rounded-lg bg-amber-200 ">
      <h3 className="text-xl pb-2">Calculated Shipping</h3>
      <select disabled className="w-full py-2 px-4 bg-slate-100 rounded-full ">
        <option>India</option>
      </select>
      <select
        disabled
        className="mt-4  w-full py-2 px-4 bg-slate-100 rounded-full "
      >
        <option>Pune, Maharashtra</option>
      </select>
      <input
        type="number"
        placeholder="ZIP Code"
        className="mt-4 w-full py-2 px-4 bg-slate-100 rounded-full "
      />
      <p className="p-2 text-red-600 font-bold">
        Currently we are only shipping to Pune location.
      </p>
    </div>
  );
};

export default Shipping;
