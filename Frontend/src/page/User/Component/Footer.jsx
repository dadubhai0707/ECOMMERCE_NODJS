// src/components/Footer.jsx
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold flex items-center space-x-2">
                            <div className="bg-blue-600 p-2 rounded-lg inline-block">
                                <ShoppingCart size={24} />
                            </div>
                            <span>ShopHub</span>
                        </h2>
                        <p className="mt-3 text-gray-400">
                            Your one-stop shop for everything you need. Quality products, fast delivery.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                            <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Categories</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Electronics</a></li>
                            <li><a href="#" className="hover:text-white">Fashion</a></li>
                            <li><a href="#" className="hover:text-white">Home & Living</a></li>
                            <li><a href="#" className="hover:text-white">Sports</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-center"><Mail size={16} className="mr-2" /> support@shophub.com</p>
                            <p className="flex items-center"><Phone size={16} className="mr-2" /> +91 98765 43210</p>
                            <p className="flex items-center"><MapPin size={16} className="mr-2" /> Mumbai, India</p>
                        </div>

                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-pink-400"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2025 ShopHub. All rights reserved. Made with love in India.
                </div>
            </div>
        </footer>
    );
};

export default Footer;