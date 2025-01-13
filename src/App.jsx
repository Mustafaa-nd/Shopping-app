import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setArticles(data);
      })
      .catch((error) => console.error(error));
  }, []);
  // Fonction pour filtrer les articles par nom
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredByName = articles.filter(
    (article) => article.title.toLowerCase().includes(searchTerm)
  );
  
  console.log("App-consoleLog",filteredByName);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout handleSearch={handleSearch} />}
          >
            <Route
              index
              element={<Home articles={filteredByName} />}
            />
            <Route path="/create" element={<CreateArticle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
