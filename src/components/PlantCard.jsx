import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFav } from "../redux/favSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fav = useSelector(state =>
    state.fav.some(i => i.id === plant.id)
  );

  const [hover, setHover] = useState(false);

  return (
    <Card style={{ width: "18rem" }} className="position-relative">

      {/* favourite */}
      <div
        style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
        onClick={() => dispatch(toggleFav(plant))}
      >
        {fav ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>

      {/* image hover */}
      <Card.Img
        variant="top"
        src={hover && plant.image2 ? plant.image2 : plant.image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{plant.name}</Card.Title>

        {/* rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < Math.round(plant.rating) ? "gold" : "#ccc"}
              size={14}
            />
          ))}
          <span style={{ fontSize: "14px", color: "#555" }}>
            {plant.rating}
          </span>
        </div>

        {/* price */}
        <div>
          <del>₹{plant.oldPrice}</del>{" "}
          <strong>₹{plant.price}</strong>
        </div>

        <div className="d-flex gap-2 mt-2">
          <Button
            variant="success"
            size="sm"
            onClick={() => dispatch(addToCart(plant))}
          >
            Add to Cart
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate(`/plant/${plant.id}`)}
          >
            View
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;
