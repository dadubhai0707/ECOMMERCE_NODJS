import { NavLink } from "react-router-dom";
import { User, Mail, Phone, Lock, MapPin, Plus, X, ChevronLeft } from "lucide-react";
import { RegisterValidationShema } from "./Validation";
import { useFormik } from "formik";
import { RegisterUserApi } from "../../../service/Auth/registerService";
const UserRegister = () => {
    const Register = useFormik({
        initialValues: {
            FullName: {
                FirstName: "",
                LastName: ""
            },
            Email: "",
            Phone: "",
            Password: "",
            Gender: "",
            Address: [
                {
                    Country: "",
                    State: "",
                    District: "",
                    City: "",
                    FullAddress: "",
                    Pin: ""
                },
            ]
        },
        validationSchema: RegisterValidationShema,
        onSubmit: async (value, { resetForm }) => {
            RegisterUserApi(value)
            resetForm()
        }
    })
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Back Button */}
                <NavLink
                    to="/user/home"
                    className="inline-flex items-center text-blue-600 hover:underline mb-6 text-sm font-medium"
                >
                    <ChevronLeft size={18} />
                    Back to Home
                </NavLink>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                    <p className="text-gray-600 mb-8">Join ShopHub and start shopping today!</p>

                    <form className="space-y-8" onSubmit={Register.handleSubmit}>
                        {/* Personal Info */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <User className="mr-2 text-blue-600" size={22} />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Rahul"
                                        name="FullName.FirstName"
                                        value={Register.values.FullName.FirstName}
                                        onChange={Register.handleChange}
                                        onBlur={Register.handleBlur}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Sharma"
                                        name="FullName.LastName"
                                        value={Register.values.FullName.LastName}
                                        onChange={Register.handleChange}
                                        onBlur={Register.handleBlur}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="email"
                                            name="Email"
                                            value={Register.values.Email}
                                            onChange={Register.handleChange}
                                            onBlur={Register.handleBlur}
                                            placeholder="rahul@example.com"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="number"
                                            name="Phone"
                                            value={Register.values.Phone}
                                            onChange={Register.handleChange}
                                            onBlur={Register.handleBlur}
                                            placeholder="9876543210"
                                            maxLength="10"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="password"
                                            name="Password"
                                            value={Register.values.Password}
                                            onChange={Register.handleChange}
                                            onBlur={Register.handleBlur}
                                            placeholder="6-8 characters"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                    <div className="flex space-x-6">
                                        {["Male", "Female", "Other"].map((g) => (
                                            <label key={g} className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="Gender"
                                                    value={g}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    className="mr-2 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-gray-700">{g}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
                                <span className="flex items-center">
                                    <MapPin className="mr-2 text-blue-600" size={22} />
                                    Address
                                </span>
                                <button
                                    type="button"
                                    className="text-blue-600 hover:underline text-sm font-medium flex items-center"
                                >
                                    <Plus size={16} className="mr-1" />
                                    Add Address
                                </button>
                            </h2>

                            {/* Address Card */}
                            <div className="bg-gray-50 p-4 rounded-lg mb-4 relative border border-gray-200">
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 text-red-600 hover:text-red-700"
                                >
                                    <X size={18} />
                                </button>

                                {Register.values.Address.map((add, index) => (
                                    <>
                                        <h1><b>Address {index + 1}</b></h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                                <input
                                                    type="text"
                                                    name={`Address[${index}].State`}
                                                    value={add.State}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    placeholder="Maharashtra"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                                                <input
                                                    type="text"
                                                    name={`Address[${index}].District`}
                                                    value={add.District}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    placeholder="Mumbai Suburban"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                                <input
                                                    type="text"
                                                    name={`Address[${index}].City`}
                                                    value={add.City}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    placeholder="Mumbai"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                                                <input
                                                    type="text"
                                                    name={`Address[${index}].Pin`}
                                                    value={add.Pin}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    placeholder="400001"
                                                    maxLength="6"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                                                <textarea
                                                    rows="2"
                                                    name={`Address[${index}].FullAddress`}
                                                    value={add.FullAddress}
                                                    onChange={Register.handleChange}
                                                    onBlur={Register.handleBlur}
                                                    placeholder="123, Green Valley Apartments, Sector 42..."
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                            >
                                Create Account
                            </button>
                            <NavLink
                                to="/auth/login"
                                className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                            >
                                Already have an account? Login
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;