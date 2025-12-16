import { useParams } from "react-router-dom";
import plants from "../jsonDatas/plants.json";
import PlantCard from "../components/PlantCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Plants = () => {
  const { category } = useParams();

  const filtered = category
    ? plants.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : plants;

  return (
    <Row className="g-4">
      {filtered.map(plant => (
        <Col key={plant.id} md={3}>
          <PlantCard plant={plant} />
        </Col>
      ))}
    </Row>
  );
};

export default Plants;
