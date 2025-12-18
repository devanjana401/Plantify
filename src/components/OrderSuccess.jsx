import BackButton from "./BackButton";
import { 
  BsCheckCircleFill, 
  BsTruck, 
  BsCashStack, 
  BsShop 
} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  return (
    <div style={{ backgroundColor: "#f4fff7", minHeight: "80vh" }}>
      <BackButton />

      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card
          style={{
            width: "440px",
            padding: "28px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            border: "none",
          }}
        >
          <div className="text-center">

            {/* success icon */}
            <BsCheckCircleFill
              size={65}
              style={{ color: "#2e7d32", marginBottom: "12px" }}
            />

            <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>
              Order Placed Successfully!
            </h3>

            <p style={{ color: "#555" }}>
              Your plant order is confirmed 🌱
            </p>

            {/* order details */}
            {order && (
              <div
                style={{
                  background: "#f1f8f4",
                  borderRadius: "12px",
                  padding: "16px",
                  marginTop: "18px",
                }}
              >
                <p style={{ margin: "8px 0", display: "flex", gap: "8px" }}>
                  <BsCashStack size={18} />
                  <strong>Total Amount:</strong> ₹{order.totalPrice}
                </p>

                <p style={{ margin: "8px 0", display: "flex", gap: "8px" }}>
                  <BsTruck size={18} />
                  <strong>Delivery By:</strong> {order.deliveryDate}
                </p>

                <p style={{ margin: "8px 0", display: "flex", gap: "8px" }}>
                  <BsShop size={18} />
                  <strong>Payment Mode:</strong> Cash on Delivery
                </p>
              </div>
            )}

            <Button
              variant="success"
              style={{ marginTop: "22px", width: "100%" }}
              onClick={() => navigate("/plants")}
            >
              Continue Shopping 🌿
            </Button>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;
