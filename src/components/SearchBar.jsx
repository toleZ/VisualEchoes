import { useState } from "react";
import axios from "axios";
import {
  SearchIcon,
  CameraIcon,
  VideoIcon,
  SpinnerIcon,
} from "../assets/icons";

const SearchBar = ({ setData, type: [type, setType] }) => {
  const [toSearch, setToSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setToSearch(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { data } = await axios.get(
      `/${type === "photos" ? "v1" : "videos"}/search?query=${toSearch}`
    );

    setData(data);
    setIsLoading(false);
  };
  const handleChangeType = () => {
    setType(type === "photos" ? "videos" : "photos");
  };

  return (
    <>
      <nav className="flex items-center gap-3 w-full">
        <form onSubmit={handleSearch} className="flex w-full">
          <input
            type="text"
            placeholder="Search for free photos"
            className="w-full p-3 outline-none text-xs md:text-base bg-gray-500/10 hover:bg-gray-500/20 focus:bg-gray-500/20 rounded-l-md"
            value={toSearch}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="p-4 bg-gray-800/10 hover:bg-gray-800/20 active:bg-gray-800/20 disabled:hover:cursor-not-allowed disabled:bg-gray-950/10 disabled:hover:bg-gray-950/10 border-l rounded-r-md"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerIcon className="animate-spin fill-gray-950/50" />
            ) : (
              <SearchIcon />
            )}
          </button>
        </form>

        <div
          className={`relative grid grid-cols-2 border rounded-md overflow-hidden after:absolute after:top-0 ${
            type !== "photos" && "after:translate-x-full"
          } after:w-1/2 after:h-full after:bg-gradient-to-r after:from-[#ee0979] after:to-[#ff6a00] after:transition-all after:duration-300`}
        >
          <button
            className={`z-10 p-4 flex ${
              type === "photos" ? "fill-white" : "fill-black"
            }`}
            onClick={handleChangeType}
          >
            <CameraIcon className="scale-[300%] md:scale-100" />
          </button>
          <button
            className={`z-10 p-4 flex ${
              type === "videos" ? "fill-white" : "fill-black"
            }`}
            onClick={handleChangeType}
          >
            <VideoIcon className="scale-[300%] md:scale-100" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
