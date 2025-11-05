// src/components/WishlistSidebar.jsx
import { X, ShoppingCart, Heart } from "lucide-react";

const WishlistSidebar = ({ isOpen, onClose }) => {
    const wishlist = [
        { id: 1, name: "Laptop Stand", price: 1499, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ac?w=100" },
        { id: 2, name: "USB-C Hub", price: 1999, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ac?w=100" },
    ];

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={onClose}></div>}

            <div
                className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-red-600 fill-current" />
                        Wishlist ({wishlist.length})
                    </h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {wishlist.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">No items in wishlist</p>
                    ) : (
                        wishlist.map((item) => (
                            <div key={item.id} className="flex space-x-3 bg-gray-50 p-3 rounded-lg">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div className="flex-1">
                                    <h4 className="font-medium text-sm">{item.name}</h4>
                                    <p className="text-lg font-bold">₹{item.price}</p>
                                    <button className="mt-2 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 flex items-center justify-center space-x-1">
                                        <ShoppingCart size={16} />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default WishlistSidebar;