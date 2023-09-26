import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../services/api.service.js";
import { Box, Container, Typography } from "@mui/material";
import { color } from "../../constans/color.js";

import VideoContent from "../videoContent/videoContent.jsx";

const Search = () => {
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${search}`
        );
        setSearchResults(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [search]);

  return (
    <>
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            Search results for:{" "}
            <span style={{ color: color.secondary }}>{search}</span>
          </Typography>
          <VideoContent videos={searchResults} />
        </Container>
      </Box>
    </>
  );
};

export default Search;
