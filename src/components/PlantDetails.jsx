import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import plants from "../jsonDatas/plants.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const plant = plants.find(p => p.id === Number(id));

  if (!plant) return <h3 className="text-center">Plant not found</h3>;

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <Card className="p-4 mt-4" style={{ maxWidth: "900px", margin: "auto" }}>
      <Row>
        {/* LEFT SIDE – IMAGES */}
        <Col md={6} className="d-flex flex-column align-items-center">
          <img
            src={plant.image}
            alt={plant.name}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />

          {plant.image2 && (
            <img
              src={plant.image2}
              alt={`${plant.name} view 2`}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </Col>

        {/* RIGHT SIDE – DETAILS */}
        <Col md={6}>
          <h3>{plant.name}</h3>
          <p className="text-muted">{plant.description}</p>

          <p>
            <del className="text-secondary">₹{plant.oldPrice}</del>
            <span className="ms-2 fw-bold text-success">
              ₹{plant.price}
            </span>
          </p>

          <p><strong>Category:</strong> {plant.category}</p>
          <p><strong>Rating:</strong> ⭐ {plant.rating}</p>

          <button
            className="btn btn-success mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </Col>
      </Row>
    </Card>
  );
};

export default PlantDetails;
