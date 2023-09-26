import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar, Search, VideoDetail } from "../";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
