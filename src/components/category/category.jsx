import { Stack } from "@mui/material";
import { categories } from "../../constans/category.js";
import { color } from "../../constans/color.js";
const Category = () => {
  return (
    <Stack
      direction={"row"}
      gap={2.5}
      sx={{
        height: "auto",
        overflowX: "scroll",
      }}
    >
      {categories.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{ borderRadius: "0" }}
          >
            <span style={{ color: color.secondary, marginRight: "35px" }}>
              {item.icon}
            </span>
            <span style={{ opacity: "1" }}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
