// src/components/CartSidebar.jsx
import { X, Trash2, Plus, Minus } from "lucide-react";
import { NavLink } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  // Dummy cart items
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 1999, qty: 1, image: "https://images.unsplash.com/photo-1505740420928-5e92f0d30d2d?w=100" },
    { id: 2, name: "Smart Watch", price: 4499, qty: 2, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold flex items-center">
            <i data-lucide="shopping-cart" className="w-6 h-6 mr-2"></i>
            My Cart ({cartItems.length})
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex space-x-3 bg-gray-50 p-3 rounded-lg">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                  <p className="text-lg font-bold">₹{item.price}</p>
                  <div className="flex items-center mt-1">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Minus size={14} />
                    </button>
                    <span className="mx-2 text-sm font-medium">{item.qty}</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Plus size={14} />
                    </button>
                    <button className="ml-auto text-red-600 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <NavLink
              to="/user/cart"
              onClick={onClose}
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              View Cart
            </NavLink>
            <button className="block w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;