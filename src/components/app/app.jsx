import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar } from "../";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
      </Routes>
    </Box>
  );
};

export default App;
