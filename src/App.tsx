/** @format */

import {useEffect, useState} from "react";

import "./App.css";
import productsData from "./data/products.json";
import {Product} from "./interfaces/Product";
import ProductItem from "./components/ProductItem";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

const PAGE_SIZE = 3;

function App() {
  const products = productsData.sort((a, b) => {
    const aTotalPrice = a.plans.reduce((sum, plan) => sum + plan.price, 0);
    const bTotalPrice = b.plans.reduce((sum, plan) => sum + plan.price, 0);
    return aTotalPrice - bTotalPrice;
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const categories: string[] = Array.from(
    new Set(products.flatMap((product) => product.categories))
  ).sort();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) =>
          product.categories.includes(selectedCategory)
        )
      );
      setCurrentPage(1);
      setSearchTerm(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setCurrentPage(1);
      setSelectedCategory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="flex-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <section className="products-list">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

        <ul>
          {paginatedProducts.map((product) => (
            <ProductItem product={product} />
          ))}
        </ul>

        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={Math.ceil(filteredProducts.length / PAGE_SIZE)}
        />
      </section>
    </div>
  );
}

export default App;
