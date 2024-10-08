/* eslint-disable react/prop-types */
const Cartcard = ({ product }) => {
  const { title, price, image, quantity } = product;
  return (
    <div>
      <div className="flex gap-4  p-2 my-4 pb-4 border-b-2 border-gray-300">
        <img src={image} alt={title} height={20} width={80} />
        <div>
          <h6 className="pt-2 text-left">{title}</h6>
          <p className="py-1">
            Price : <span className="font-mono">{price}</span>$
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-yellow-400 w-8 h-8 rounded-full hover:bg-yellow-500 ">
              -
            </button>
            <p>{quantity}</p>
            <button className="bg-yellow-400 w-8 h-8 rounded-full hover:bg-yellow-500 ">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
