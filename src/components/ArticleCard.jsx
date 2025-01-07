import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ArticleCard({ article,handleDelete }) {

    const [likes, setLikes] = useState(false);
    const [Description, setDescription] = useState(false);
    
    
    return (
        // <div className="card bg-base-100 shadow-xl m-4">
        //     <div className="card-body">
        //         <h2 className="card-title">{article.title}</h2>
        //         <p className="text-smaller text-gray-500">Date : {article.created_at}</p>
        //         <p>{article.description}</p>
        //         <div className="card-actions justify-between items-center">
        //             <span onClick={() => setLikes(likes + 1)} className="cursor-pointer">{likes} ❤️</span>
        //             <button
        //                 onClick={()=>handleDelete(article.id)} 
        //                 className="btn btn-error text-white">delete</button>
        //         </div>
        //     </div>
        // </div>

        <div className="card bg-base-100 w-96 shadow-xl">
            <span onClick={() => setLikes(!likes)} className="cursor-pointer right-0 top-0 absolute p-2">
                {likes ? "❤️" : "🤍"}
            </span>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{article.title}</h2>
                <figure className="px-10 pt-10">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <p>Specification :  
                    <button
                    onClick={()=>setDescription(!Description)}

                    className="btn btn-sm btn-primary ml-2">
                        {Description ? "Hide" : "Show"}
                    </button>
                    {
                        Description && <p>{article.description}</p>
                    }
                </p>
                <p>{article.stock} items available</p>
                <p>Price :  100$</p>
                
                <div className="card-actions justify-between items-center">
                    
                    <div className="card-actions">
                        <button 
                        onClick
                        className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}