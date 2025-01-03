import ArticleCard from '../components/ArticleCard'
import React, { useEffect, useState } from 'react'


export default function Home() {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        //Récupérer les articles d'une API ou d'une autre source de données
        fetch('http://localhost:3000/articles')
        .then((response) => response.json())
        .then((data) => {
            data.sort((a,b) => a.created_at.localeCompare(b.created_at))
            setArticles(data);
            setError(null)
        })
        .catch((error) => setError(error.message))
    },[])

    const handleDelete = (id) => {
        console.log("Article with id", id," is deleted")
        const newArticles = articles.filter((article) => article.id !== id)
        setArticles(newArticles)
         //Supprimer l'article de l'API
        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE'
        })
      }

  return (
    <>
    {/* {articles.length ===0 
    ? <p className="text-2xl text-center mt-10">Loading...</p> 
    : null} */}

    {articles.length === 0 && !error && <p className="text-2xl text-center mt-10">Loading....</p>}
    {articles.length === 0 && error && <p className="text-2xl text-center mt-10">Error: {error}</p>}
        {
            articles.map((article) => (
                <ArticleCard article={article} key={article.id} handleDelete={handleDelete}/>
            ))
        }
    </>
  )
}

