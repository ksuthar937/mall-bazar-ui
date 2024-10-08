import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Card from "./card";
import { ThreeDots } from "react-loader-spinner";
import Searchbar from "./searchbar";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center pt-20">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="black"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="text-xl">
          Please wait while fetching products from the server!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Searchbar />
      <div className="pt-4 flex flex-wrap  justify-center">
        {products?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
