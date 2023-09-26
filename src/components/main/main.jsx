import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { color } from "../../constans/color.js";

import { Category, VideoContent } from "../index.jsx";
import { ApiService } from "../../services/api.service.js";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        console.log(data.items);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedCategory]);
  const selectedCategoryFunction = (name) => setSelectedCategory(name);
  return (
    <Stack>
      <Category
        selectedCategoryFunction={selectedCategoryFunction}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"100vw"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
          <VideoContent videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
