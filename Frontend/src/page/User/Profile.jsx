// src/page/User/Profile.jsx
import { useState } from "react";
import { Edit2, MapPin, Shield, Bell, CreditCard, User, Mail, Phone, Calendar, Camera } from "lucide-react";

const Profile = () => {
    // Dummy user data
    const [user] = useState({
        name: "Rahul Sharma",
        email: "rahul@example.com",
        phone: "+91 98765 43210",
        joined: "2024-01-15",
        avatar: null,
    });

    const [addresses] = useState([
        {
            type: "Home",
            name: "Rahul Sharma",
            address: "123, Green Valley Apartments, Sector 42, Mumbai, Maharashtra - 400001",
            isDefault: true,
        },
        {
            type: "Office",
            name: "Rahul S.",
            address: "Tech Park, Andheri East, Mumbai, Maharashtra - 400069",
            isDefault: false,
        },
    ]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                        {/* Avatar */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative">
                                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                    {user.avatar ? <img src={user.avatar} alt="Avatar" className="rounded-full" /> : user.name.charAt(0)}
                                </div>
                                <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition">
                                    <Camera size={16} />
                                </button>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-xs text-gray-400 mt-1 flex items-center">
                                <Calendar size={14} className="mr-1" />
                                Member since {new Date(user.joined).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8 space-y-1">
                            {[
                                { icon: User, label: "Personal Information", active: true },
                                { icon: MapPin, label: "Address Book", active: false },
                                { icon: Shield, label: "Change Password", active: false },
                                { icon: Bell, label: "Notifications", active: false },
                                { icon: CreditCard, label: "Payment Methods", active: false },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${item.active
                                        ? "bg-blue-50 text-blue-600 font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <item.icon size={18} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <User className="mr-2 text-blue-600" size={20} />
                                Personal Information
                            </h3>
                            <button className="text-blue-600 hover:underline text-sm font-medium flex items-center">
                                <Edit2 size={16} className="mr-1" />
                                Edit
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                                <p className="text-gray-900 font-medium">{user.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                                <p className="text-gray-900 font-medium flex items-center">
                                    <Mail size={16} className="mr-1 text-gray-400" />
                                    {user.email}
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                                <p className="text-gray-900 font-medium flex items-center">
                                    <Phone size={16} className="mr-1 text-gray-400" />
                                    {user.phone}
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                                <p className="text-gray-500 italic">Not added</p>
                            </div>
                        </div>
                    </div>

                    {/* Address Book */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <MapPin className="mr-2 text-blue-600" size={20} />
                                Address Book
                            </h3>
                            <button className="text-blue-600 hover:underline text-sm font-medium">
                                + Add New
                            </button>
                        </div>

                        <div className="space-y-4">
                            {addresses.map((addr, i) => (
                                <div
                                    key={i}
                                    className={`p-4 rounded-lg border ${addr.isDefault ? "border-blue-500 bg-blue-50" : "border-gray-200"
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className="font-medium text-gray-900">{addr.type}</span>
                                                {addr.isDefault && (
                                                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                                                        Default
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm font-medium text-gray-800">{addr.name}</p>
                                            <p className="text-sm text-gray-600 mt-1">{addr.address}</p>
                                        </div>
                                        <button className="text-blue-600 hover:underline text-sm">Edit</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <Shield className="mr-2 text-blue-600" size={20} />
                                Change Password
                            </h3>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;