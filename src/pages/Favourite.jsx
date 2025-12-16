// src/components/Favourite.jsx
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../redux/favSlice";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Favourite = () => {
  const fav = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  if (fav.length === 0) {
    return (
      <h3 className="text-center mt-5 text-muted">
        Your favourites list is empty 💔
      </h3>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">My Favourites</h2>

      <Card className="p-3 shadow-sm">
        <Table responsive className="align-middle">
          <thead>
            <tr>
              <th>Plant</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {fav.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="70"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                    <strong>{item.name}</strong>
                  </div>
                </td>

                <td>₹{item.price}</td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(toggleFav(item))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Favourite;
