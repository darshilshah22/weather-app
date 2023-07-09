import React, { useContext, useState } from "react";
import "./searchbar.css";
import { ContextAPI } from "../../Context/Context";

const Searchbar = () => {
  const { setSearch } = useContext(ContextAPI);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    // e.preventDefault();

    if (e.key === "Enter") {
      setSearch(e.target.value);
      setQuery("");
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
