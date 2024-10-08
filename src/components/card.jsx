/* eslint-disable react/prop-types */
import ReactStars from "react-stars";

const Card = ({ product }) => {
  const { title, price, image } = product;
  const { rate } = product.rating;

  return (
    <div className="flex flex-col justify-end items-center w-60 p-2 m-2 border-2 border-black rounded-lg">
      <img src={image} alt={title} height={50} width={100} />
      <h6 className="pt-2 text-center truncate w-40">{title}</h6>
      <ReactStars
        count={5}
        size={16}
        color2="#ffd700"
        edit={false}
        value={rate}
      />
      <p className="font-bold py-1">
        Price : <span className="  font-mono text-xl">{price}</span>$
      </p>
      <button className="bg-yellow-400 w-full py-2 rounded-md uppercase hover:bg-yellow-500 ">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
