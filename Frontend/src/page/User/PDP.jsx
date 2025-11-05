// src/page/User/PDP.jsx
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "../User/Component/DumpProduct";
import { ShoppingCart, Heart, Share2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "../User/Component/Product";
const PDP = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find product by slug
  const product = dummyProducts.find((p) => p.Slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <Link to="/user" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const { Name, Images, PriceDetail, Stock, Description } = product;
  const discount = PriceDetail.Discount || 0;
  const finalPrice = PriceDetail.Total;
  const originalPrice = PriceDetail.Price;

  const images = Images.length > 0 ? Images : ["https://via.placeholder.com/600"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/user" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ChevronLeft size={20} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={images[selectedImage]}
              alt={Name}
              className="w-full h-96 object-cover"
            />
            {Stock === 0 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`border-2 rounded-lg overflow-hidden ${selectedImage === i ? "border-blue-600" : "border-gray-300"
                    }`}
                >
                  <img src={img} alt="" className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{Name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-600">(4.2) 128 reviews</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-gray-900">₹{finalPrice}</span>
              {discount > 0 && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{originalPrice}</span>
                  <span className="text-sm font-bold text-red-600">-{discount}%</span>
                </>
              )}
            </div>
            <p className="text-sm text-green-600 mt-1">Inclusive of all taxes</p>
          </div>

          {/* Stock */}
          <p className={`text-sm font-medium mb-4 ${Stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {Stock > 0 ? `${Stock} in stock` : "Currently unavailable"}
          </p>

          {/* Quantity */}
          {Stock > 0 && (
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(Stock, quantity + 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={() => alert(`Added ${quantity} × ${Name} to cart!`)}
            disabled={Stock === 0}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition ${Stock > 0
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            <ShoppingCart size={20} />
            <span>{Stock > 0 ? "Add to Cart" : "Out of Stock"}</span>
          </button>

          {/* Wishlist & Share */}
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
              <Heart size={18} />
              <span>Wishlist</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {Description || "High-quality product with premium features. Perfect for daily use and long-lasting performance."}
            </p>
          </div>

          {/* Features (Optional) */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Premium build quality with durable materials
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                1-year warranty included
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Free shipping & easy returns
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products (Optional) */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyProducts
            .filter((p) => p._id !== product._id)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PDP;