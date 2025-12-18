import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import BackButton from "./BackButton";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart || []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  // estimated delivery
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDate = deliveryDate.toDateString();

  const handlePlaceOrder = () => {
    // Save order for profile
    localStorage.setItem(
      "lastOrder",
      JSON.stringify({
        items: cartItems,
        totalPrice,
        deliveryDate: formattedDate,
      })
    );

    // clear cart
    dispatch(clearCart());

    navigate("/order-success", { replace: true });
  };

  return (
    <div>
      <BackButton />
      <div className="text-center my-5">
        <h3>Confirm Your Order 🌱</h3>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>
        <p><strong>Payment Mode:</strong> Cash on Delivery</p>
        <p><strong>Estimated Delivery:</strong> {formattedDate}</p>

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
