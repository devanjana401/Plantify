import { useParams } from "react-router-dom";
import { useState } from "react";
import plants from "../jsonDatas/plants.json";
import PlantCard from "../components/PlantCard";
import { Row, Col, Container, Card, Form } from "react-bootstrap";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Plants = () => {
  const { category } = useParams();

  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");

  const clearFilters = () => {
    setPrice("all");
    setRating("all");
  };

  // category filter
  let filteredPlants = category
    ? plants.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : plants;

  // price filter
  if (price === "low") {
    filteredPlants = filteredPlants.filter((p) => p.price < 300);
  } else if (price === "mid") {
    filteredPlants = filteredPlants.filter(
      (p) => p.price >= 300 && p.price <= 700
    );
  } else if (price === "high") {
    filteredPlants = filteredPlants.filter((p) => p.price > 700);
  }

  // rating filter
  if (rating !== "all") {
    filteredPlants = filteredPlants.filter(
      (p) => p.rating >= Number(rating)
    );
  }

  return (
    <Container fluid className="my-4">

      {/* filter icon */}
      <div
        style={{
          position: "relative",
          marginBottom: "16px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            width: "fit-content",
            marginLeft: "36px"
          }}
          onClick={() => setShowFilter(!showFilter)}
        >
          <CiFilter size={44} />
          <span style={{ marginLeft: "6px", fontWeight: 500,fontSize:"20px" }}>Filter</span>
        </div>

        {/* filter card */}
        {showFilter && (
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "24px",
              width: "240px",
              zIndex: 1000
            }}
          >
            <Card
              style={{
                padding: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                position: "relative"
              }}
            >
              {/* close icon */}
              <IoClose
                size={20}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer"
                }}
                onClick={() => setShowFilter(false)}
              />

              {/* price filter */}
              <div style={{ marginBottom: "14px" }}>
                <h6 style={{ fontWeight: 600 }}>Price</h6>
                <Form.Check
                  type="radio"
                  name="price"
                  label="All"
                  checked={price === "all"}
                  onChange={() => setPrice("all")}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="Below ₹300"
                  checked={price === "low"}
                  onChange={() => setPrice("low")}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="₹300 – ₹700"
                  checked={price === "mid"}
                  onChange={() => setPrice("mid")}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="Above ₹700"
                  checked={price === "high"}
                  onChange={() => setPrice("high")}
                />
              </div>

              {/* rating filter */}
              <div style={{ marginBottom: "14px" }}>
                <h6 style={{ fontWeight: 600 }}>Rating</h6>
                <Form.Check
                  type="radio"
                  name="rating"
                  label="All"
                  checked={rating === "all"}
                  onChange={() => setRating("all")}
                />
                <Form.Check
                  type="radio"
                  name="rating"
                  label="4★ & above"
                  checked={rating === "4"}
                  onChange={() => setRating("4")}
                />
                <Form.Check
                  type="radio"
                  name="rating"
                  label="3★ & above"
                  checked={rating === "3"}
                  onChange={() => setRating("3")}
                />
                <Form.Check
                  type="radio"
                  name="rating"
                  label="2★ & above"
                  checked={rating === "2"}
                  onChange={() => setRating("2")}
                />
              </div>

              {/* clear filters */}
              <div
                style={{
                  textAlign: "right",
                  cursor: "pointer",
                  color: "#dc3545",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
                onClick={clearFilters}
              >
                Clear Filters
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* plants grid */}
      <Row>
        {filteredPlants.map((plant) => (
          <Col key={plant.id} xs={6} sm={4} md={3} className="mb-4">
            <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Plants;
