// src/page/User/Cart.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Trash2, Plus, Minus, Tag, Truck, Shield, ArrowRight } from "lucide-react";

const Cart = () => {
    // Dummy cart items (baad mein context/localStorage se aayega)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 1999,
            qty: 1,
            image: "https://images.unsplash.com/photo-1505740420928-5e92f0d30d2d?w=100",
            stock: 15,
        },
        {
            id: 2,
            name: "Smart Watch with Heart Rate",
            price: 4499,
            qty: 2,
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100",
            stock: 8,
        },
        {
            id: 3,
            name: "USB-C Hub 7-in-1",
            price: 1999,
            qty: 1,
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ac?w=100",
            stock: 20,
        },
    ]);

    const [coupon, setCoupon] = useState("");

    // Calculations
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const discount = 0; // Coupon se aayega
    const total = subtotal + tax - discount;

    // Update Quantity
    const updateQty = (id, newQty) => {
        if (newQty < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, qty: newQty } : item
            )
        );
    };

    // Remove Item
    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                // Empty Cart
                <div className="text-center py-16">
                    <i data-lucide="shopping-cart" className="w-24 h-24 text-gray-300 mx-auto mb-4"></i>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                    <NavLink
                        to="/user"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Continue Shopping
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </NavLink>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                {/* Details */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                                    <p className="text-lg font-bold text-gray-900 mt-1">₹{item.price}</p>
                                    <p className="text-sm text-green-600">In Stock</p>
                                </div>

                                {/* Quantity & Remove */}
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => updateQty(item.id, item.qty - 1)}
                                            className="p-2 hover:bg-gray-100"
                                            disabled={item.qty <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="px-4 py-1 font-medium">{item.qty}</span>
                                        <button
                                            onClick={() => updateQty(item.id, item.qty + 1)}
                                            className="p-2 hover:bg-gray-100"
                                            disabled={item.qty >= item.stock}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-600 hover:text-red-700 p-2"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                            {/* Price Breakdown */}
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax (18% GST)</span>
                                    <span className="font-medium">₹{tax}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount</span>
                                        <span className="font-medium">-₹{discount}</span>
                                    </div>
                                )}
                                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>

                            {/* Coupon */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Tag className="inline w-4 h-4 mr-1" />
                                    Have a coupon?
                                </label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                        placeholder="Enter code"
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-900 transition">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                                <span>Proceed to Checkout</span>
                                <ArrowRight size={18} />
                            </button>

                            {/* Benefits */}
                            <div className="mt-6 space-y-2 text-xs text-gray-500">
                                <p className="flex items-center">
                                    <Truck className="w-4 h-4 mr-2 text-green-600" />
                                    Free shipping on orders above ₹999
                                </p>
                                <p className="flex items-center">
                                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                                    Secure payment • Easy returns
                                </p>
                            </div>

                            <NavLink
                                to="/user"
                                className="block text-center mt-4 text-blue-600 hover:underline text-sm"
                            >
                                ← Continue Shopping
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;