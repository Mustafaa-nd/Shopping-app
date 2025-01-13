import { useState } from "react";
import ArticleCard from "../components/ArticleCard";

export default function Home({ articles }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

//   const handleDelete = (id) => {
//     const newArticles = articles.filter((article) => article.id !== id);
//     fetch(`http://localhost:3000/articles/${id}`, {
//       method: "DELETE",
//     });
//   };

  const updateStock = (id, newStock) => {
    fetch(`http://localhost:3000/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stock: newStock }),
    });
  };
  console.log("HomeConsoleLog",articles);

  const filteredArticles = articles.filter(
    (article) => article.price >= minPrice && article.price <= maxPrice
  );

  console.log(filteredArticles);
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-5">
        <div className="flex gap-2">
          <h1 className="text-3xl">Products filter </h1>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice === Infinity ? "" : minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
            className="input input-bordered"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
            className="input input-bordered"
          />
          <button
            onClick={() => {
              setMinPrice(0);
              setMaxPrice(Infinity);
            }}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
        {filteredArticles.map((article) => (
          <ArticleCard
            // handleDelete={handleDelete}
            updateStock={updateStock}
            article={article}
            key={article.id}
          />
        ))}
      </div>
    </div>
  );
}
