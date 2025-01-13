import { Link, Outlet } from "react-router-dom";

export default function Layout({ handleSearch }) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Products</a>
           {/* Barre de recherche */}
        <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-full max-w-md"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Add Product</Link>
            </li>
          </ul>
        </div>
      </div>

     

      <div className="min-h-screen bg-base-200 py-4 px-8">
        <Outlet />
      </div>
    </>
  );
}
