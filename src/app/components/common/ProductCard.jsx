import StarRatings from "react-star-ratings";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay (3 seconds) to show the skeleton loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="animate-pulse bg-gray-200 max-w-96 mx-auto max-h-96 px-4 py-2 border shadow-md rounded">
          <div className="h-60 bg-gray-300 mb-4"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        </div>
      ) : (
        <Link to={`/product-detail/${product._id}`}>
          <div className="group relative bg-gray-50 max-w-96 mx-auto max-h-96 px-4 py-2 border shadow-md rounded">
            <div className="aspect-h-1 aspect-w-1 px-2 py-2 h-60 overflow-hidden rounded-md group-hover:opacity-75">
              <img
                alt={product.name}
                src={product.thumbnail[0] || ""}
                className="h-full w-full max-h-64 object-contain bg-gray-50 object-center lg:h-full lg:w-fit"
              />
            </div>
            <div className="flex flex-col py-2 gap-1">
              <div>
                <h3 className="text-base truncate font-medium text-black">
                  {product.name || ""}
                </h3>
                <p className="text-gray-500 text-sm truncate">
                  {product.description}
                </p>
              </div>
              <div>
                <StarRatings
                  rating={product.rating}
                  starDimension="20px"
                  starRatedColor="#6366f1"
                  starSpacing="3px"
                />
              </div>
              <div className="flex justify-between gap-1 items-center">
                <div className="flex gap-2">
                  <p className="text-sm block font-medium text-indigo-500">
                    {`$${product.pricediscount || ""}`}
                  </p>
                  <p className="text-sm block font-medium line-through text-gray-400">
                    {`$${product.price || ""}`}
                  </p>
                </div>
                <div>
                  <div className="text-indigo-500 bg-indigo-50 font-medium w-fit px-3 py-1 rounded text-xs">
                    {product.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
