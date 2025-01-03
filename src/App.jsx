
import { Layout } from "./layouts/layout"
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/create" element={<CreateArticle/>} />
        </Route>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
