import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryOptions = categories.map((category) => (
    <button
      key={category}
      onClick={() => onSelectCategory(category)}
      className={category === selectedCategory ? "selected" : "undefined"}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Categories:</h5>
      {categoryOptions}
    </div>
  );
}

export default CategoryFilter;
