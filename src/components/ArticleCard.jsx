import React from 'react'

export default function ArticleCard({article}) {
  return (
    <div className="card bg-base-100 w-full shadow-xl m-4">
        <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p className="text-smaller text-gray-500">Date : {article.created_at}</p>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
            </div>

            <div className="card-actions justify-between items-center">
                <span className="cursor-pointer">❤️</span>
                <button className="btn btn-error text-white">Delete</button>

            </div>
        </div>
    </div>
  )
}
