import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline-secondary"
      style={{
        marginLeft:"40px",
        marginTop:"26px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        height:"40px",
        width:"40px",
        borderRadius:"50%"
      }}
      onClick={() => navigate(-1)}
    >
      <IoArrowBack size={18} />
    </Button>
  );
};

export default BackButton;
