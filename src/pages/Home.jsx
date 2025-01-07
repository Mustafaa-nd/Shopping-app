import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";


export default function Home() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        //Recupererles articles
        fetch('http://localhost:3000/articles')
        .then((response) => response.json())
        .then((data) => {
            data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
            setArticles(data);
            setError(null);
        })
        .catch((error) => setError(error.message));
    },[]);
    
    const handleDelete = (id) => {
        const newArticles = articles.filter((article) => article.id !== id);
        setArticles(newArticles);
        //Supprimer l'article
        // fetch('http://localhost:3000/articles/'+id, {
            fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE'
        });
    }

    return (
        <>
            {/* { articles.length === 0 
            ? <p  className="text-2xl text-center mt-10">Loading....</p> 
            : null } */}

            { articles.length === 0 && !error && <p className="text-2xl text-center mt-10">Loading....</p> }

            { error && <p className="text-2xl text-center mt-10 text-red-500">{error}</p> }

            {  
            articles.map((article) => (
                <ArticleCard
                    handleDelete={handleDelete} 
                    article={article} 
                    key={article.id} />
            ))
        }
        </>
    )
}