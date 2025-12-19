import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsHeart, BsCart, BsPerson } from "react-icons/bs";

// redux
import { useSelector } from "react-redux";

// search component
import Search from "./Search";
import plants from "../jsonDatas/plants.json";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const cartItems = useSelector((state) => state.cart); // get cart from Redux
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    // remove login info only
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    // navigate to home
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{ height: "80px", zIndex: 1050 }}
    >
      <Container fluid>
        {/* logo */}
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
          {/* center menu */}
          <Nav className="mx-auto align-items-center gap-3 text-2xl">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Plants" id="plants-dropdown">
              <NavDropdown.Item href="/plants">All Plants</NavDropdown.Item>
              <NavDropdown.Item href="/plants/aquatic">Aquatic</NavDropdown.Item>
              <NavDropdown.Item href="/plants/flower">Flowers</NavDropdown.Item>
              <NavDropdown.Item href="/plants/fruit">Fruits</NavDropdown.Item>
              <NavDropdown.Item href="/plants/hanging">Hanging</NavDropdown.Item>
              <NavDropdown.Item href="/plants/herbal">Herbal</NavDropdown.Item>
              <NavDropdown.Item href="/plants/indoor">Indoor</NavDropdown.Item>
              <NavDropdown.Item href="/plants/tree">Trees</NavDropdown.Item>
              <NavDropdown.Item href="/plants/vegetables">Vegetables</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gardening Kit" id="kit-dropdown">
              <NavDropdown.Item href="/kit">All</NavDropdown.Item>
              <NavDropdown.Item href="/kit/growbags">Grow Bags</NavDropdown.Item>
              <NavDropdown.Item href="/kit/pots">Pots</NavDropdown.Item>
              <NavDropdown.Item href="/kit/fertilizer">Fertilizer</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* right side */}
          <Nav className="align-items-center gap-3">
            {/* search */}
            <div className="d-flex">
              <Search plants={plants} />
            </div>

            <div className="d-flex gap-2">
            {/* favourites */}
            <Nav.Link href="/favourites">
              <BsHeart size={24} />
            </Nav.Link>

            {/* cart */}
            <Nav.Link href="/cart" style={{ position: "relative" }}>
              <BsCart size={24} />
              {isLoggedIn && cartItems.length > 0 && (
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

            {/* user */}
            {isLoggedIn ? (
              <NavDropdown title={`Welcome, ${userName}`} id="user-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/signin">
                <BsPerson size={24} />
              </Nav.Link>
            )}
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
