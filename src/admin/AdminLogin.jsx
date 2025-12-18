import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admingardening");
    } else {
      alert("Invalid admin credentials");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-3">Admin Login</h3>
      <Form>
        <Form.Control
          className="mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          className="mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-100" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;
