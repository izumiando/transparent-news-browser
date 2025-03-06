import React from "react";
import './Header.css'
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search articles" className="search-input" />
      <Search className="search-icon" size={18} />
    </div>
  );
};

export default SearchBar;