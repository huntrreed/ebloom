import React from "react";

interface Props {
  title: string;
  img: string;
  price: string;
  inStock: boolean;
  category: string;
  slug: string;  // ✅ Add slug prop
}

const PlantShop: React.FC<Props> = ({ title, img, price, inStock, category, slug }) => {
  return (
    <a href={`/shop/${slug}`} className="product-card w-full max-w-[250px] flex flex-col items-center bg-[#eadfcb] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center justify-between md:w-[300px] p-4">
        {/* Product Image */}
        {img ? (
          <img className="w-40 h-60 sm:w-60 sm:h-80 rounded-lg object-cover" src={img} alt={title} />
        ) : (
          <div className="w-40 h-60 sm:w-60 sm:h-80 bg-gray-300 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">No Image</span>
          </div>
        )}

        {/* Product Title */}
        <div className="mt-6 flex flex-col text-sm w-40 sm:w-60 md:w-60 text-center">
          <p className="font-Quicksand_B text-xs sm:text-sm font-semibold text-[#4e3d34]">{title}</p>
          <p className="font-Quicksand_L text-xs sm:text-sm text-green-600">${price}</p>
        </div>

        {/* Add to Cart / Sold Out Button */}
        <button
          className={`mt-4 px-4 py-2 rounded-md font-semibold text-sm ${
            inStock ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </a>
  );
};

export default PlantShop;
