// src/page/User/Order.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Package, Truck, CheckCircle, XCircle, Eye, MapPin, Clock, AlertCircle } from "lucide-react";

const Order = () => {
  // Dummy orders data (baad mein API se aayega)
  const [orders] = useState([
    {
      id: "ORD-2025-001",
      date: "2025-10-28",
      status: "Delivered",
      total: 6497,
      items: [
        { name: "Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e92f0d30d2d?w=80" },
        { name: "Smart Watch", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=80" },
      ],
      deliveryDate: "2025-11-02",
    },
    {
      id: "ORD-2025-002",
      date: "2025-11-01",
      status: "Shipped",
      total: 1999,
      items: [
        { name: "USB-C Hub 7-in-1", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ac?w=80" },
      ],
      tracking: "Track on DTDC",
    },
    {
      id: "ORD-2025-003",
      date: "2025-11-03",
      status: "Processing",
      total: 1499,
      items: [
        { name: "Laptop Stand", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ac?w=80" },
      ],
    },
    {
      id: "ORD-2025-004",
      date: "2025-10-15",
      status: "Cancelled",
      total: 2999,
      items: [
        { name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1605648916361-91c28f3a2e5d?w=80" },
      ],
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered": return <CheckCircle size={16} />;
      case "Shipped": return <Truck size={16} />;
      case "Processing": return <Package size={16} />;
      case "Cancelled": return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

      {orders.length === 0 ? (
        // Empty State
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No orders yet</h2>
          <p className="text-gray-500 mb-6">When you place an order, it will appear here.</p>
          <NavLink
            to="/user"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Shopping
          </NavLink>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Order Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Order ID: {order.id}</p>
                      <p className="text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span>
                  </div>
                </div>
              </div>

              {/* Order Body */}
              <div className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Images */}
                  <div className="flex -space-x-2">
                    {order.items.map((item, i) => (
                      <img
                        key={i}
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border-2 border-white shadow-sm"
                        title={item.name}
                      />
                    ))}
                    {order.items.length > 3 && (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Order Details */}
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-gray-900">₹{order.total}</p>
                    <p className="text-sm text-gray-600">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>

                    {/* Status Specific Info */}
                    {order.status === "Delivered" && order.deliveryDate && (
                      <p className="text-sm text-green-600 mt-1 flex items-center">
                        <CheckCircle size={14} className="mr-1" />
                        Delivered on {new Date(order.deliveryDate).toLocaleDateString()}
                      </p>
                    )}
                    {order.status === "Shipped" && order.tracking && (
                      <p className="text-sm text-blue-600 mt-1 flex items-center">
                        <Truck size={14} className="mr-1" />
                        {order.tracking}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-end">
                    <button className="flex items-center justify-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>

                    {order.status === "Processing" && (
                      <button className="flex items-center justify-center space-x-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium">
                        <AlertCircle size={16} />
                        <span>Cancel Order</span>
                      </button>
                    )}

                    {order.status === "Shipped" && (
                      <button className="flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                        <MapPin size={16} />
                        <span>Track Order</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Section */}
      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Need help with an order?</h3>
        <p className="text-sm text-blue-700 mb-4">
          Our customer support is available 24/7 to assist you with tracking, returns, or any issues.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            Contact Support
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            Return Policy
          </a>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            Shipping Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Order;