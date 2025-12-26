import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlantCard from "./PlantCard";

const BestsellerPlants = ({ plants }) => {
  // get top 8 plants by rating
  const bestsellerPlants = [...plants]          //creates a copy of the plants array so sorting won’t affect the original data.
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <section className="my-4">
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#2c3e50",
            marginTop:"40px",
            textDecoration:"underline",
            textUnderlineOffset:"6px"
          }}
        >
          Bestseller Plants
        </h2>

        <Row className="gx-3 gy-4 justify-content-center" style={{marginTop:"40px"}}>
          {bestsellerPlants.map((plant) => (
            <Col xs={6} sm={6} md={3} lg={3} key={plant.id} className="d-flex justify-content-center">
              <PlantCard plant={plant} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BestsellerPlants;
