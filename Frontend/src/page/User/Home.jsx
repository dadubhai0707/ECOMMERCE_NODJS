// src/page/User/Home.jsx
import ProductCard from "../User/Component/Product";
import { dummyProducts } from "../User/Component/DumpProduct";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Banner (Optional) */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-xl mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopHub</h1>
        <p className="text-lg">Get up to 50% off on selected items!</p>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default Home;