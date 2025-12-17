import { useParams } from "react-router-dom";
import plants from "../jsonDatas/plants.json";
import PlantCard from "../components/PlantCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Plants = () => {
  const { category } = useParams();

  // filter plants by category if selected
  const filtered = category
    ? plants.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : plants;

  return (
    <Container className="my-4">
      <Row className="g-4">
        {filtered.map((plant) => (
          <Col key={plant.id} xs={6} sm={4} md={3}>
            <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Plants;
