import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
      
      <Row style={{ marginBottom: "40px" }}>
        <Col>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "#2f4f4f",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6c757d",
              maxWidth: "700px",
              margin: "10px auto",
              lineHeight: "1.7",
            }}
          >
            We are committed to promoting a greener lifestyle by making plants
            easily accessible to everyone. Our platform supports plant lovers of
            all levels by offering quality products, care guidance, and a
            nature-inspired experience.
          </p>
        </Col>
      </Row>

      <Row style={{ gap: "20px", justifyContent: "center" }}>
        <Col md={5}>
          <Card
            style={{
              height: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "600" }}>
                Our Mission
              </Card.Title>
              <Card.Text style={{ color: "#555", lineHeight: "1.6" }}>
                Our mission is to provide healthy, well-maintained plants that
                enhance living spaces and improve well-being. We focus on
                quality, affordability, and customer satisfaction while
                encouraging sustainable gardening practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card
            style={{
              height: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "600" }}>
                Our Vision
              </Card.Title>
              <Card.Text style={{ color: "#555", lineHeight: "1.6" }}>
                We envision homes and workspaces filled with greenery, creating
                healthier and more positive environments. Our goal is to build a
                community that values nature, sustainability, and mindful
                living.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              padding: "30px",
              border: "2px dashed #9bc4b9",
              borderRadius: "50px 60px 55px 65px",
              backgroundColor: "#f8fffd",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              maxWidth: "800px",  
              width: "90%",        
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontWeight: "600",
                marginBottom: "15px",
                color: "#2f4f4f",
              }}
            >
              Why Choose Us
            </h4>
            <p style={{ color: "#555", lineHeight: "1.7" }}>
              We prioritize quality, trust, and customer satisfaction. Every
              plant is carefully selected and packed to ensure freshness and
              health. With reliable delivery, responsive support, and a strong
              passion for greenery, we make plant shopping simple, enjoyable,
              and stress-free.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
