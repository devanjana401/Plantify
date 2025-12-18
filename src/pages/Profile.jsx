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
  const [openOrderIndex, setOpenOrderIndex] = useState(null);

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || {};
    const userOrders = allOrders[userEmail] || [];
    setOrders(userOrders.reverse());
  }, [userEmail]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddress(form));
    alert("Address saved successfully!");
  };

  const toggleOrder = (index) => {
    setOpenOrderIndex(openOrderIndex === index ? null : index);
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
          margin: "auto",
        }}
      >
        {/* address column */}
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Delivery Address
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              name="street"
              placeholder="Street"
              value={form.street || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              name="city"
              placeholder="City"
              value={form.city || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              name="state"
              placeholder="State"
              value={form.state || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              name="pinCode"
              placeholder="Pin Code"
              value={form.pinCode || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Save Address
            </button>
          </form>
        </div>

        {/* orders column */}
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            My Orders
          </h2>

          {orders.length === 0 ? (
            <div className="text-center text-gray-600">
              <BsBoxSeam size={40} />
              <p>No orders yet 🌱</p>
            </div>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="border rounded-lg mb-3">
                {/* header */}
                <div
                  onClick={() => toggleOrder(index)}
                  className="cursor-pointer flex justify-between items-center p-3 bg-gray-100 font-semibold"
                >
                  <span>Order #{orders.length - index}</span>
                  <span>{openOrderIndex === index ? "▲" : "▼"}</span>
                </div>

                {/* details dropdown */}
                {openOrderIndex === index && (
                  <div className="p-3 space-y-3">
                    {/* items */}
                    <div className="bg-gray-50 p-2 rounded">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm border-b py-1"
                        >
                          <span>
                            {item.name} × {item.qty || 1}
                          </span>
                          <span>
                            ₹{item.price * (item.qty || 1)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* summary */}
                    <div className="bg-green-50 p-2 rounded text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <BsCashStack />
                        <strong>Total:</strong> ₹{order.totalPrice}
                      </p>
                      <p className="flex items-center gap-2">
                        <BsTruck />
                        <strong>Delivery:</strong> {order.deliveryDate}
                      </p>
                      <p>
                        <strong>Payment:</strong> {order.paymentMode}
                      </p>
                      <p className="text-green-700 font-semibold">
                        Status: Confirmed ✅
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
