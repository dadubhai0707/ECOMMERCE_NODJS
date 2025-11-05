import React from 'react'
import { ShoppingCart, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
function Product({ product }) {
    const { Name, Images, PriceDetail, Slug, Stock } = product;
    const discount = PriceDetail.Discount || 0;
    const finalPrice = PriceDetail.Total;
    const originalPrice = PriceDetail.Price;
    return (
        <NavLink
            to={`/user/product/${Slug}`}
            className="group block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    src={Images[0] || "https://via.placeholder.com/300"}
                    alt={Name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{discount}%
                    </span>
                )}
                {Stock === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg line-clamp-1 group-hover:text-blue-600">
                    {Name}
                </h3>

                <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.2)</span>
                </div>

                <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹{finalPrice}</span>
                    {discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
                    )}
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Added to cart: " + Name);
                    }}
                    disabled={Stock === 0}
                    className={`mt-3 w-full py-2 rounded-lg font-medium transition flex items-center justify-center space-x-2 ${Stock > 0
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    <ShoppingCart size={18} />
                    <span>{Stock > 0 ? "Add to Cart" : "Out of Stock"}</span>
                </button>
            </div>
        </NavLink>
    );
};
export default Product
