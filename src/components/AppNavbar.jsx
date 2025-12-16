import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// bootstrap icons
import { BsSearch, BsHeart, BsCart, BsPerson } from "react-icons/bs";

// redux
import { useSelector } from "react-redux";

const AppNavbar = () => {
  // ✅ get cart items from redux store
  const cartItems = useSelector((state) => state.cart);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{ height: "80px", zIndex: 1050 }}
    >
      <Container fluid>
        {/* logo + name */}
        <Navbar.Brand href="/" className="d-flex align-items-center ml-10">
          <img
            src="/logo.png"
            width="50"
            height="50"
            className="me-2"
            alt="Plantify Logo"
          />
          <strong style={{ fontSize: "32px", fontStyle: "italic" }}>
            Plantify
          </strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content" style={{ background: "white" }}>
          {/* menu items */}
          <Nav className="mx-auto align-items-center gap-3 text-2xl">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Plants" id="plants-dropdown">
              <NavDropdown.Item href="/plants/aquatic">Aquatic</NavDropdown.Item>
              <NavDropdown.Item href="/plants/flower">Flowers</NavDropdown.Item>
              <NavDropdown.Item href="/plants/fruit">Fruits</NavDropdown.Item>
              <NavDropdown.Item href="/plants/hanging">Hanging</NavDropdown.Item>
              <NavDropdown.Item href="/plants/herbal">Herbal</NavDropdown.Item>
              <NavDropdown.Item href="/plants/indoor">Indoor</NavDropdown.Item>
              <NavDropdown.Item href="/plants/tree">Trees</NavDropdown.Item>
              <NavDropdown.Item href="/plants/vegetables">
                Vegetables
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gardening Kit" id="kit-dropdown">
              <NavDropdown.Item href="/kit/tools">Tools</NavDropdown.Item>
              <NavDropdown.Item href="/kit/pots">Pots</NavDropdown.Item>
              <NavDropdown.Item href="/kit/fertilizer">
                Fertilizer
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav className="align-items-center gap-3">
            {/* search */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search plants"
                size="md"
              />
              <Button variant="outline-success" size="sm">
                <BsSearch />
              </Button>
            </Form>

            {/* icons */}
            <Nav.Link href="/favourites">
              <BsHeart size={24} />
            </Nav.Link>

            {/* 🛒 CART WITH COUNT */}
            <Nav.Link href="/cart" style={{ position: "relative" }}>
              <BsCart size={24} />

              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "green",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </Nav.Link>

            <Nav.Link href="/profile">
              <BsPerson size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
