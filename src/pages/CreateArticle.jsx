import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function CreateArticle() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()
    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) {
            alert("Please fill in all fields")
            return
        }
        console.log("Title: ", title, "Description: ", description)
        const newArticle = {
            title,
            description,
            created_at: new Date().toLocaleDateString()
        }

        //send the new article to the API
        fetch('http://localhost:3000/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArticle)
        })
        .then((response) => {
            navigate('/')
        })
    }
    return (
      <>
          <div className="font-bold text-sxl mb-6">
                  <form onSubmit={(e)=>handleSubmit(e)}>
                      <div className="mb-4">
                          <label>Article Title</label>
                          <input 
                              value = {title}
                                onChange = {(e)=>
                                    /* décommenter la constante déclarée plus haut et utiliser la syntaxe : "handleChange(e)" 
                                    ou utiliser simplement la suivante*/
                                    setTitle(e.target.value)}
                              type="text" 
                              className="border-0 outline-0 p-2 ring-1 ring-lime-700 rounded-lg w-full block mt-1 focus:ring-2" />
                      </div>
  
                      <div className="mb-8">
                          <label>Article Content</label>
                          <textarea
                              value = {description}
                              onChange = {(e)=>
                                /* décommenter la constante déclarée plus haut et utiliser la syntaxe : "handleChange(e)" 
                                ou utiliser simplement la suivante*/
                                setDescription(e.target.value)}
                              className="border-0 outline-0 p-2 ring-1 ring-lime-700 rounded-lg w-full block mt-1 focus:ring-2" ></textarea>
                      </div>
                      <button
                      disabled={title.length < 5 || description.length < 5}
                      className="bg-lime-700 text-white block w-full p-2 rounded-lg hover:ring-lime-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">Create</button>
                </form>
              </div>
      </>
    )
  }