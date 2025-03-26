import React from "react";

interface Props {
  title: string;
  img: string;
  price: string;
  inStock: boolean;
  category: string;
  slug: string;
}

const PlantShop: React.FC<Props> = ({ title, img, price, inStock, category, slug }) => {
  return (
    <a
      href={`/shop/${slug}`}
      className="product-card w-full max-w-[250px] flex flex-col items-center bg-[#eadfcb] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      data-instock={inStock}
      data-category={category.toLowerCase()}
    >
      <div className="flex flex-col items-center justify-between md:w-[300px] p-4">
        {img ? (
          <img
            className="w-40 h-60 sm:w-60 sm:h-80 rounded-lg object-cover"
            src={img}
            alt={title}
          />
        ) : (
          <div className="w-40 h-60 sm:w-60 sm:h-80 bg-gray-300 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">No Image</span>
          </div>
        )}

        <div className="mt-6 flex flex-col text-sm w-40 sm:w-60 md:w-60 text-center">
          <p className="font-Quicksand_B text-xs sm:text-sm font-semibold text-[#4e3d34]">{title}</p>
          <p className="font-Quicksand_L text-xs sm:text-sm text-green-600">${price}</p>
        </div>

        <div className="mt-4">
          {inStock ? (
            <button className="px-4 py-2 rounded-md font-semibold text-sm bg-[#4e3d34] text-[#eadfcb] hover:bg-[#3a2b23]">
              Add to Cart
            </button>
          ) : (
            <span className="italic text-[#4e3d34] text-sm font-medium">Sold Out</span>
          )}
        </div>
      </div>
    </a>
  );
};

export default PlantShop;
