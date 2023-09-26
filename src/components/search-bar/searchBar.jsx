import { IconButton, Paper } from "@mui/material";
import { color } from "../../constans/color.js";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
  };
  return (
    <Paper
      onSubmit={submitHandler}
      component={"form"}
      sx={{
        border: `1px solid ${color.secondary}`,
        pl: 2,
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
