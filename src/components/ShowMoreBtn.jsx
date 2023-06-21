import axios from "axios";
import { useState } from "react";
import { SpinnerIcon } from "../assets/icons";

const ShowMoreBtn = ({ data: [data, setData], type }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = async () => {
    setIsLoading(true);

    const { data: newData } = await axios.get(data.next_page);

    const fullData = {
      ...data,
      ...newData,
      [type]: [...data[type], ...newData[type]],
    };

    setData(fullData);
    setIsLoading(false);
  };

  return (
    <button
      className={`relative w-full flex items-center justify-center gap-3 mt-3 p-2 font-medium hover:text-white disabled:text-gray-950/50 disabled:bg-gray-500/10 disabled:hover:cursor-not-allowed overflow-hidden border-2 border-black hover:border-opacity-0 disabled:border-none rounded-md transition-all duration-300 after:-z-10 after:contents-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#ee0979] after:to-[#ff6a00] after:-translate-x-full disabled:hover:after:-translate-x-full hover:after:translate-x-0 after:transition-all after:duration-300`}
      onClick={handleShowMore}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          Loading <SpinnerIcon className={"animate-spin fill-gray-950/50"} />
        </>
      ) : (
        "Show more"
      )}
    </button>
  );
};

export default ShowMoreBtn;
