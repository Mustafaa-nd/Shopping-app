import { useState } from 'react'

export default function ArticleCard({article, handleDelete}) {
  
  const [likes, setLikes] = useState(0)
  


  
  return (
    <div className="card bg-base-100 w-full shadow-xl m-4">
        <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p className="text-smaller text-gray-500">Date : {article.created_at}</p>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
            </div>

            <div className="card-actions justify-between items-center">
                <span onClick={() => setLikes(likes + 1) } 
                className="cursor-pointer">{likes} ❤️</span>
                <button 
                  onClick={()=>handleDelete(article.id)}
                  className="btn btn-error text-white">Delete</button>

            </div>
        </div>
    </div>
  )
}
