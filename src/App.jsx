import axios from "axios";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ShowMoreBtn from "./components/ShowMoreBtn";
import PhotosContainer from "./components/PhotosContainer";
import VideosContainer from "./components/VideosContainer";

const App = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("photos");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/v1/search?query=random");

      setData(data);
    })();
  }, []);

  return (
    <>
      <header className="w-5/6 mx-auto mt-3">
        <SearchBar setData={setData} type={[type, setType]} />
      </header>
      <main className="w-5/6 mx-auto my-3 flex flex-col items-center justify-center">
        <section className="columns-1 md:columns-2 lg:columns-3">
          {type === "photos" ? (
            <PhotosContainer photos={data?.photos} />
          ) : (
            <VideosContainer videos={data?.videos} />
          )}
        </section>
        <ShowMoreBtn data={[data, setData]} type={type} />
      </main>
      <Footer />
    </>
  );
};

export default App;
