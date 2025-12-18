import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/cartSlice";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackButton from "./BackButton";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";

const GardeningDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/gardening/${id}`);
        const data = response.data;
        if (data) {
          setItem({
            ...data,
            image: `${SERVER_URL}${data.image}`,
            image2: data.image2 ? `${SERVER_URL}${data.image2}` : null,
          });
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error fetching gardening item:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
  if (!item) return <h3 className="text-center mt-5">Item not found</h3>;

  return (
    <div>
      <BackButton />

      <Card className="p-4 mt-4" style={{ maxWidth: "900px", margin: "auto" }}>
        <Row>
          {/* images */}
          <Col md={6} className="d-flex flex-column align-items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                maxWidth: "250px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            {item.image2 && (
              <img
                src={item.image2}
                alt={`${item.name} view 2`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
          </Col>

          <Col md={6}>
            <h3>{item.name}</h3>
            <p className="text-muted">{item.description}</p>

            <p>
              {item.oldPrice && (
                <del className="text-secondary">₹{item.oldPrice}</del>
              )}
              <span className="ms-2 fw-bold text-success">₹{item.price}</span>
            </p>

            {item.category && <p><strong>Category:</strong> {item.category}</p>}

            {item.rating && (
              <p style={{ color: "#ffc107", fontSize: "1rem" }}>
                {"⭐".repeat(Math.round(item.rating))} ({item.rating})
              </p>
            )}

            <button
              className="btn btn-success mt-3"
              onClick={() =>
                dispatch(
                  addToCart({
                    ...item,
                    image: item.image,
                    image2: item.image2,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default GardeningDetails;
