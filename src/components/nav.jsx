import { useState } from "react";

 function Navbar() {
  const [open, setOpen] = useState(false);
  const handleSearch = (query) => {
    console.log("Search Term:", query);
  };


  return (
    <nav style={{ fontFamily: '"Playfair Display", serif' }} className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-20">
      <div className="max-w-7xl m-auto px-4 py-3 flex items-center justify-between">
        <div className="md:w-full xl:container xl:mx-auto
         xl:max-w-5xl h-14 
         flex items-center justify-around">
        {/* Logo */}
        <div className="text-4xl font-bold">MyLogo</div>
 
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
        {/* Search Bar */}
         <div className=" hidden  max-h-15 md:flex flex-col items-center justify-center bg-gray-100 ">
      <SearchBar onSearch={handleSearch} />
    </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 px-4 py-4 text-lg">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto max-h-[34px] flex items-center bg-white shadow"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 max-h-[34px] text-md p-2 focus:outline-none border-solid border-[1.2px] border-black"
      />

      <button
        type="submit"
        className="p-1 h-[33.33px] bg-black text-white hover:bg-[#f6550e] transition"
      >
        GO
      </button>
    </form>
  );
}
export default Navbar;