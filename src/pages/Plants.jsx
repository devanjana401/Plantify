import { useParams } from "react-router-dom";
import { useState } from "react";
import plants from "../jsonDatas/plants.json";
import PlantCard from "../components/PlantCard";
import Filter from "../components/Filter";
import { Row, Col, Container } from "react-bootstrap";

const Plants = () => {
  const { category } = useParams();     //extracts category from url

  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");

  const clearFilters = () => {
    setPrice("all");
    setRating("all");
  };

  // category filter
  let filteredPlants = category
    ? plants.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : plants;

  // price filter
  if (price === "low") filteredPlants = filteredPlants.filter(p => p.price < 300);
  if (price === "mid") filteredPlants = filteredPlants.filter(p => p.price >= 300 && p.price <= 700);
  if (price === "high") filteredPlants = filteredPlants.filter(p => p.price > 700);

  // rating filter
  if (rating !== "all") filteredPlants = filteredPlants.filter(p => p.rating >= Number(rating));     //converts string to number

  return (
    <Container fluid className="my-4">
      <Filter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        price={price}
        setPrice={setPrice}
        rating={rating}
        setRating={setRating}
        clearFilters={clearFilters}
      />

      <Row>
        {filteredPlants.map(plant => (
          <Col key={plant.id} xs={6} sm={4} md={3} className="mb-4">
            <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Plants;
