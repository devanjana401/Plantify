import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GardeningCard from "../components/GardeningCard";
import Filter from "../components/Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

const SERVER_URL = "https://json-server-ze6o.onrender.com";

const GardeningKit = () => {
  const { category } = useParams();

  const [gardeningItems, setGardeningItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");

  const clearFilters = () => {
    setPrice("all");
    setRating("all");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `${SERVER_URL}/gardening?category=${category}`
          : `${SERVER_URL}/gardening`;

        const response = await axios.get(url);    //sends get request to server
        setGardeningItems(response.data);         //stores response data in state
      } catch (error) {
        console.error("Error fetching gardening items:", error);
      } finally {                                 //confirm loading ends even if error occurs
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  let filteredItems = gardeningItems;

  if (price === "low") filteredItems = filteredItems.filter(i => i.price < 300);
  if (price === "mid") filteredItems = filteredItems.filter(i => i.price >= 300 && i.price <= 700);
  if (price === "high") filteredItems = filteredItems.filter(i => i.price > 700);

  if (rating !== "all") filteredItems = filteredItems.filter(i => i.rating >= Number(rating));

  if (loading) return <h3 className="text-center mt-5">Loading Gardening Kits...</h3>;
  if (!filteredItems.length) return <h3 className="text-center mt-5">No items found</h3>;

  return (
    <Container className="my-5">
      <Filter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        price={price}
        setPrice={setPrice}
        rating={rating}
        setRating={setRating}
        clearFilters={clearFilters}
      />

      <Row className="g-3">
        {filteredItems.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <GardeningCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GardeningKit;
