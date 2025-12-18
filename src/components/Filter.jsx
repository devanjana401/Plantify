import { Card, Form } from "react-bootstrap";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Filter = ({
  showFilter,
  setShowFilter,
  price,
  setPrice,
  rating,
  setRating,
  clearFilters
}) => {
  return (
    <div style={{ position: "relative", marginBottom: "16px" }}>
      {/* filter icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "fit-content",
          marginLeft: "36px"
        }}
        onClick={() => setShowFilter(!showFilter)}
      >
        <CiFilter size={44} />
        <span style={{ marginLeft: "6px", fontWeight: 500, fontSize: "20px" }}>
          Filter
        </span>
      </div>

      {/* filter card */}
      {showFilter && (
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "24px",
            width: "240px",
            zIndex: 1000
          }}
        >
          <Card
            style={{
              padding: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
              position: "relative"
            }}
          >
            <IoClose
              size={20}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer"
              }}
              onClick={() => setShowFilter(false)}
            />

            {/* price filter */}
            <div style={{ marginBottom: "14px" }}>
              <h6 style={{ fontWeight: 600 }}>Price</h6>
              <Form.Check type="radio" label="All" checked={price === "all"} onChange={() => setPrice("all")} />
              <Form.Check type="radio" label="Below ₹300" checked={price === "low"} onChange={() => setPrice("low")} />
              <Form.Check type="radio" label="₹300 – ₹700" checked={price === "mid"} onChange={() => setPrice("mid")} />
              <Form.Check type="radio" label="Above ₹700" checked={price === "high"} onChange={() => setPrice("high")} />
            </div>

            {/* rating filter */}
            <div style={{ marginBottom: "14px" }}>
              <h6 style={{ fontWeight: 600 }}>Rating</h6>
              <Form.Check type="radio" label="All" checked={rating === "all"} onChange={() => setRating("all")} />
              <Form.Check type="radio" label="4★ & above" checked={rating === "4"} onChange={() => setRating("4")} />
              <Form.Check type="radio" label="3★ & above" checked={rating === "3"} onChange={() => setRating("3")} />
              <Form.Check type="radio" label="2★ & above" checked={rating === "2"} onChange={() => setRating("2")} />
            </div>

            {/* clear */}
            <div
              style={{
                textAlign: "right",
                cursor: "pointer",
                color: "#dc3545",
                fontWeight: 500,
                fontSize: "14px"
              }}
              onClick={clearFilters}
            >
              Clear Filters
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Filter;
