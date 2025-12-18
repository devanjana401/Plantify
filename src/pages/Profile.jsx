import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../redux/profileSlice";
import BackButton from "../components/BackButton";
import { BsTruck, BsCashStack, BsBoxSeam } from "react-icons/bs";

const Profile = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.profile.address);
  const [form, setForm] = useState(address || {});
  const [orders, setOrders] = useState([]);

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || {};
    const userOrders = allOrders[userEmail] || [];
    setOrders(userOrders.reverse()); // show latest orders first
  }, [userEmail]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddress(form));
    alert("Address saved successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <BackButton />

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* address column */}
        <div
          className="max-w-md w-full bg-white rounded-xl shadow-md p-6"
          style={{ minWidth: "300px" }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Delivery Address
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={form.street || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={form.pinCode || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* orders column */}
        <div
          className="max-w-md w-full bg-white rounded-xl shadow-md p-6"
          style={{ flex: 1, minWidth: "300px" }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            My Orders
          </h2>

          {orders.length === 0 ? (
            <div className="text-center text-gray-600">
              <BsBoxSeam size={50} />
              <p className="mt-3">No orders placed yet 🌱</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div key={index} className="border rounded-lg p-3 space-y-2">
                  <h4 className="font-semibold">Order #{orders.length - index}</h4>

                  {/* ordered items */}
                  <div className="bg-gray-50 p-2 rounded-lg">
                    {order.items?.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between border-b py-1 text-sm"
                      >
                        <span>
                          {item.name} × {item.qty || 1}
                        </span>
                        <span>₹{item.price * (item.qty || 1)}</span>
                      </div>
                    ))}
                  </div>

                  {/* order summary */}
                  <div className="bg-green-50 p-2 rounded-lg space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <BsCashStack />
                      <strong>Total Amount:</strong> ₹{order.totalPrice}
                    </p>
                    <p className="flex items-center gap-2">
                      <BsTruck />
                      <strong>Delivery By:</strong> {order.deliveryDate}
                    </p>
                    <p>
                      <strong>Payment Mode:</strong> {order.paymentMode}
                    </p>
                    <p className="text-green-700 font-semibold">
                      Status: Order Confirmed ✅
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
