import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFav } from "../redux/favSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SERVER_URL = "http://localhost:5000";

const GardeningCard = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const isFav = useSelector((state) =>
        state.fav.some((f) => f.id === item.id)
    );

    return (
        <Card
            className="position-relative h-100 shadow-sm"
            style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}
        >
            {/* favourite icon */}
            <div
                style={{ position: "absolute", top: 8, right: 8, zIndex: 10, cursor: "pointer" }}
                onClick={() => dispatch(toggleFav(item))}
            >
                {isFav ? <FaHeart color="red" size={18} /> : <FaRegHeart size={18} />}
            </div>

            {/* image */}
            <Card.Img
                variant="top"
                src={hover && item.image2 ? `${SERVER_URL}${item.image2}` : `${SERVER_URL}${item.image}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ height: "180px", objectFit: "cover", width: "100%" }}
            />

            <Card.Body className="d-flex flex-column p-2">

                <Card.Title style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                    {item.name}
                </Card.Title>

                <div className="mb-2" style={{ fontSize: "0.875rem" }}>
                    {item.oldPrice && <del className="text-muted">₹{item.oldPrice}</del>}{" "}
                    <strong>₹{item.price}</strong>
                </div>

                {item.rating && (
                    <div style={{ fontSize: "0.8rem", color: "#ffc107", marginBottom: "0.5rem" }}>
                        {"⭐".repeat(Math.round(item.rating))} ({item.rating})
                    </div>
                )}

                {/* buttons */}
                <div className="mt-auto d-flex gap-1">
                    <Button
                        variant="success"
                        size="sm"
                        className="flex-grow-1"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    ...item,
                                    image: `${SERVER_URL}${item.image}`,          //converts relative path to full url
                                    image2: item.image2 ? `${SERVER_URL}${item.image2}` : null,
                                })
                            )
                        }
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        className="flex-grow-1"
                        onClick={() => navigate(`/kit/item/${item.id}`)}
                    >
                        View
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default GardeningCard;
