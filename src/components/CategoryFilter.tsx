/** @format */

interface ICategoryFilter {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}
function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: ICategoryFilter) {
  return (
    <nav className="nav-categories">
      <h2>Categories</h2>
      <ul className="nav-menu">
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? "active" : ""}
          >
            <a onClick={() => void onSelectCategory(category)}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryFilter;
