import { Box, Stack } from "@mui/material";
import { Logo } from "../../constans/index.js";
import { color } from "../../constans/color.js";
import { Link } from "react-router-dom";
import { SearchBar } from "../index.jsx";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: color.primary,
      }}
      // height={"5vh"}
    >
      <Link to="/">
        <img src={Logo} alt="" height={30} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
