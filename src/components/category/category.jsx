import { Stack } from "@mui/material";
import { categories } from "../../constans/category.js";
import { color } from "../../constans/color.js";
const Category = ({ selectedCategoryFunction, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      gap={2}
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
            style={{
              borderRadius: "0",
              background: item.name === selectedCategory && color.secondary,
              color: item.name === selectedCategory && "white",
            }}
            onClick={() => selectedCategoryFunction(item.name)}
          >
            <span
              style={{
                color:
                  item.name === selectedCategory ? "white" : color.secondary,
                marginRight: "20px",
              }}
            >
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
