import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !description) return;

    const newArticle = {
      title,
      description,
      created_at: new Date().toLocaleDateString(),
    }
    // send newArticle to server
    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    .then((response) => {
      // setTitle("");
      // setDescription("");
      navigate('/');
    })
  }
  return (
    <>
        <div className="font-bold text-sxl mb-6">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-4">
                        <label>Post Title</label>
                        <input 
                            value={title} 
                            onChange={(e)=>setTitle(e.target.value)}
                            type="text" 
                            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" />
                    </div>

                    <div className="mb-8">
                        <label>Article Content</label>
                        <textarea
                            value={description} 
                            onChange={(e)=>setDescription(e.target.value)}
                            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" ></textarea>
                    </div>
                    <button 
                      disabled={title.length < 5 || description.length < 5}
                      className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">Create</button>
                </form>
            </div>
    </>
  )
}