import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const address = useSelector(state => state.profile.address); // get address
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <h3 className="text-center mt-5 text-muted">
        Your cart is empty 🛒
      </h3>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      <Card className="p-3 shadow-sm mb-4">
        <Table responsive className="align-middle">
          <thead>
            <tr>
              <th>Plant</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="70"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                    <strong>{item.name}</strong>
                  </div>
                </td>

                <td>₹{item.price}</td>

                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      −
                    </Button>

                    <span>{item.qty}</span>

                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      +
                    </Button>
                  </div>
                </td>

                <td>₹{item.price * item.qty}</td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* DELIVERY ADDRESS */}
      <Card className="mb-4 p-3 shadow-sm">
        <h5>Delivery Address</h5>
        <hr />
        {address.name ? (
          <div>
            <p><strong>Name:</strong> {address.name}</p>
            <p><strong>Street:</strong> {address.street}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>State:</strong> {address.state}</p>
            <p><strong>Pin Code:</strong> {address.pinCode}</p>
            <p><strong>Phone:</strong> {address.phone}</p>
          </div>
        ) : (
          <p className="text-muted">No delivery address saved yet.</p>
        )}
      </Card>

      {/* CART SUMMARY */}
      <Card className="mt-4 p-3 shadow-sm" style={{ maxWidth: "400px" }}>
        <h5>Cart Summary</h5>
        <hr />
        <p>
          <strong>Total Items:</strong> {cart.length}
        </p>
        <p>
          <strong>Total Amount:</strong>{" "}
          <span className="text-success fw-bold">
            ₹{totalAmount}
          </span>
        </p>

        <Button variant="success" className="w-100">
          Proceed to Checkout
        </Button>
      </Card>
    </Container>
  );
};

export default Cart;
