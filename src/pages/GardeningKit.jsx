import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GardeningCard from "../components/GardeningCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";

const GardeningKit = () => {
  const [gardeningItems, setGardeningItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category 
          ? `${SERVER_URL}/gardening?category=${category}` 
          : `${SERVER_URL}/gardening`;
        const response = await axios.get(url);
        setGardeningItems(response.data);
      } catch (error) {
        console.error("Error fetching gardening items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (loading) return <h3 className="text-center mt-5">Loading Gardening Kits...</h3>;
  if (!gardeningItems.length) return <h3 className="text-center mt-5">No items found</h3>;

  return (
    <Container className="my-5">
      <h2 className="mb-4">Gardening Kits</h2>
      <Row className="g-3">
        {gardeningItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <GardeningCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GardeningKit;
