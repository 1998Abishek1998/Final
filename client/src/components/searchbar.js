import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { SearchResult } from "../components";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { searchProfile, user } = useAppContext();
  useEffect(() => {
    if (search) {
      searchProfile(`search?username=${search}`, user.companyId);
    }
  }, [search]);
  return (
    <>
      <div className="search-bar">
        <span>
          <FaSearch />
        </span>
        <input
          value={search}
          type="search"
          placeholder="Search for creators, inspirations, and projects"
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
          }
        />
        <div className={search === "" ? "display-none" : ""}>
          <SearchResult />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
