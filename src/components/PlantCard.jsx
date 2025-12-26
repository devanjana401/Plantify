import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFav } from "../redux/favSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();         //send actions to redux store
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const isFav = useSelector((state) =>      //read redux state
    state.fav.some((item) => item.id === plant.id)
  );

  // automatically determine if plant is a bestseller
  const isBestseller = plant.rating >= 4.5;

  return (
    <Card
      className="position-relative h-100 shadow-sm"
      style={{
        width: "100%",
        maxWidth: "250px",
        margin: "0 auto",
      }}
    >
      {/* bestseller badge */}
      {isBestseller && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "red",
            color: "white",
            padding: "4px 6px",
            fontSize: "12px",
            borderRadius: "3px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          Bestseller
        </div>
      )}

      {/* favourite icon */}
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleFav(plant))}
      >
        {isFav ? <FaHeart color="red" size={18} /> : <FaRegHeart size={18} />}
      </div>

      {/* image hover */}
      <Card.Img
        variant="top"
        src={hover && plant.image2 ? plant.image2 : plant.image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          height: "180px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <Card.Body className="d-flex flex-column p-2">
        <Card.Title style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
          {plant.name}
        </Card.Title>

        {/* rating */}
        <div className="d-flex align-items-center gap-1 mb-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < Math.round(plant.rating) ? "gold" : "#ccc"}
              size={12}
            />
          ))}
          <span className="text-muted" style={{ fontSize: "0.75rem" }}>
            {plant.rating}
          </span>
        </div>

        {/* price */}
        <div className="mb-2" style={{ fontSize: "0.875rem" }}>
          <del className="text-muted">₹{plant.oldPrice}</del>{" "}
          <strong>₹{plant.price}</strong>
        </div>

        {/* buttons */}
        <div className="mt-auto d-flex gap-1">
          <Button
            variant="success"
            size="sm"
            className="flex-grow-1"
            onClick={() => dispatch(addToCart(plant))}    //adds plant to redux cart
          >
            Add to Cart
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-grow-1"
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
