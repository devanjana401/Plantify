import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SERVER_URL = "http://localhost:5000/gardening";

const AdminGardeningKit = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    image: "",
    image2: "",
    oldPrice: "",
    price: "",
    rating: "",
    description: "",
  });

  const [editingItem, setEditingItem] = useState(null);

  // admin check + fetch items
  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin");
      
      return;
    }
    fetchItems();
  }, []);

  // fetch items
  const fetchItems = async () => {
    try {
      const res = await axios.get(SERVER_URL);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // add function
  const handleAdd = async () => {
    const id = Date.now().toString();
    try {
      const res = await axios.post(SERVER_URL, { ...newItem, id });
      setItems([...items, res.data]);
      setNewItem({
        name: "",
        category: "",
        image: "",
        image2: "",
        oldPrice: "",
        price: "",
        rating: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  // delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // update function
  const handleUpdate = async (id, updatedItem) => {
    try {
      const res = await axios.put(`${SERVER_URL}/${id}`, updatedItem);
      setItems(items.map(item => (item.id === id ? res.data : item)));
      setEditingItem(null);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between mb-3">
        <h2>Admin Gardening Kits</h2>
        <Button
          variant="secondary"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            navigate("/");
          }}
        >
          Logout
        </Button>
      </div>

      {/* add new item form */}
      <Form className="mb-4">
        <Row className="g-2">
          <Col>
            <Form.Control
              placeholder="Name"
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, name: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Category"
              value={newItem.category}
              onChange={e => setNewItem({ ...newItem, category: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Image URL"
              value={newItem.image}
              onChange={e => setNewItem({ ...newItem, image: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Image2 URL"
              value={newItem.image2}
              onChange={e => setNewItem({ ...newItem, image2: e.target.value })}
            />
          </Col>
        </Row>

        <Row className="g-2 mt-2">
          <Col>
            <Form.Control
              placeholder="Old Price"
              type="number"
              value={newItem.oldPrice}
              onChange={e => setNewItem({ ...newItem, oldPrice: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Price"
              type="number"
              value={newItem.price}
              onChange={e => setNewItem({ ...newItem, price: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Rating"
              type="number"
              step="0.1"
              value={newItem.rating}
              onChange={e => setNewItem({ ...newItem, rating: e.target.value })}
            />
          </Col>
        </Row>

        <Row className="g-2 mt-2">
          <Col>
            <Form.Control
              placeholder="Description"
              value={newItem.description}
              onChange={e => setNewItem({ ...newItem, description: e.target.value })}
            />
          </Col>
          <Col xs="auto">
            <Button onClick={handleAdd}>Add Item</Button>
          </Col>
        </Row>
      </Form>

      {/* edit item form */}
      {editingItem && (
        <Form className="mb-4 border p-3">
          <h5>Edit Item</h5>
          <Row className="g-2">
            <Col>
              <Form.Control
                placeholder="Name"
                value={editingItem.name}
                onChange={e => setEditingItem({ ...editingItem, name: e.target.value })}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Category"
                value={editingItem.category}
                onChange={e => setEditingItem({ ...editingItem, category: e.target.value })}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Image URL"
                value={editingItem.image}
                onChange={e => setEditingItem({ ...editingItem, image: e.target.value })}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Image2 URL"
                value={editingItem.image2}
                onChange={e => setEditingItem({ ...editingItem, image2: e.target.value })}
              />
            </Col>
          </Row>

          <Row className="g-2 mt-2">
            <Col>
              <Form.Control
                placeholder="Old Price"
                type="number"
                value={editingItem.oldPrice}
                onChange={e => setEditingItem({ ...editingItem, oldPrice: e.target.value })}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Price"
                type="number"
                value={editingItem.price}
                onChange={e => setEditingItem({ ...editingItem, price: e.target.value })}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Rating"
                type="number"
                step="0.1"
                value={editingItem.rating}
                onChange={e => setEditingItem({ ...editingItem, rating: e.target.value })}
              />
            </Col>
          </Row>

          <Row className="g-2 mt-2">
            <Col>
              <Form.Control
                placeholder="Description"
                value={editingItem.description}
                onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
              />
            </Col>
            <Col xs="auto" className="d-flex gap-2">
              <Button onClick={() => handleUpdate(editingItem.id, editingItem)}>Save</Button>
              <Button variant="secondary" onClick={() => setEditingItem(null)}>Cancel</Button>
            </Col>
          </Row>
        </Form>
      )}

      {/* admin item cards */}
      <Row className="g-3">
        {items.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <div className="border p-2">
              <strong>{item.name}</strong>
              <div>Category: {item.category}</div>
              <div>Price: ₹{item.price}</div>
              <div>Rating: {item.rating}</div>
              <div className="mt-2 d-flex gap-1">
                <Button 
                  size="sm" 
                  variant="primary" 
                  onClick={() => setEditingItem({ ...item })} // make a copy for editing
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="danger" 
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminGardeningKit;
