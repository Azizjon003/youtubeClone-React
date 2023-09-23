import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { color } from "../../constans/color.js";
import { Link } from "react-router-dom";
import { Category } from "../index.jsx";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack>
      <Category />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
