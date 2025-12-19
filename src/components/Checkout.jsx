import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import BackButton from "./BackButton";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart || []);
  const userEmail = localStorage.getItem("userEmail");

  // total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  // delivery date (+5 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDate = deliveryDate.toDateString();

  const handlePlaceOrder = () => {
    if (!userEmail) {
      alert("Please login to place order");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // get all orders
    const allOrders = JSON.parse(localStorage.getItem("orders")) || {};

    const newOrder = {
      items: cartItems,
      totalPrice,
      deliveryDate: formattedDate,
      paymentMode: "Cash on Delivery",
    };

    // create user array if not exists
    if (!allOrders[userEmail]) {
      allOrders[userEmail] = [];
    }

    // add order
    allOrders[userEmail].push(newOrder);

    // save to localStorage
    localStorage.setItem("orders", JSON.stringify(allOrders));

    // clear cart
    dispatch(clearCart());

    // redirect
    navigate("/order-success");
  };

  return (
    <div style={{ padding: "20px" }}>
      <BackButton />

      <div className="text-center my-5">
        <h3>Confirm Your Order 🌱</h3>

        <p>
          <strong>Total Price:</strong> ₹{totalPrice}
        </p>

        <p>
          <strong>Payment Mode:</strong> Cash on Delivery
        </p>

        <p>
          <strong>Estimated Delivery:</strong> {formattedDate}
        </p>

        <Button
          variant="success"
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
