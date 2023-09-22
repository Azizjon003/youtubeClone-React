import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Link to={"/"}>
      <Button variant="outlined">Home</Button>
    </Link>
  );
};

export default Main;
