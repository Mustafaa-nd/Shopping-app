import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ArticleCard({ article, handleDelete, updateStock }) {
    const [likes, setLikes] = useState(false);
    const [Description, setDescription] = useState(false);

    const handleBuy = () => {
        if (article.stock > 0) {
            updateStock(article.id, article.stock - 1);
        }
    };

    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <span onClick={() => setLikes(!likes)} className="cursor-pointer right-0 top-0 absolute p-2">
                {likes ? "❤️" : "🤍"}
            </span>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{article.title}</h2>
                <figure className="px-10 pt-10">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="rounded-xl"
                    />
                </figure>
                <p>
                    Specification :
                    <button
                        onClick={() => setDescription(!Description)}
                        className="btn btn-sm btn-primary ml-2"
                    >
                        {Description ? "Hide" : "Show"}
                    </button>
                    {Description && <p>{article.description}</p>}
                </p>
                <p>{article.stock > 0 ? `${article.stock} items available` : "Not available"}</p>
                <p>Price : ${article.price}</p>
                <div className="card-actions justify-between items-center">
                    <div className="card-actions">
                        <button
                            onClick={handleBuy}
                            disabled={article.stock === 0}
                            className="btn btn-primary"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
