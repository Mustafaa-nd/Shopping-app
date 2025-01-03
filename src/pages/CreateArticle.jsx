export default function CreateArticle() {
    return (
      <>
          <div className="font-bold text-sxl mb-6">
                  <form>
                      <div className="mb-4">
                          <label>Post Title</label>
                          <input 
                              type="text" 
                              className="border-0 outline-0 p-2 ring-1 ring-lime-700 rounded-lg w-full block mt-1 focus:ring-2" />
                      </div>
  
                      <div className="mb-8">
                          <label>Post Content</label>
                          <textarea
                              className="border-0 outline-0 p-2 ring-1 ring-lime-700 rounded-lg w-full block mt-1 focus:ring-2" ></textarea>
                      </div>
                      <button className="bg-lime-700 text-white block w-full p-2 rounded-lg hover:bg-lime-900">Create</button>
                  </form>
              </div>
      </>
    )
  }