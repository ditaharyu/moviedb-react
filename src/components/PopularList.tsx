import { useState, useEffect } from "react";
import { PopularMovie } from "../types/index";
import { usePopular } from "../controller";
import MovieList from "./base/List";

const PopularList = () => {
  const { data } = usePopular();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === Math.ceil((data?.results?.length ?? 0) / 5) - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change the interval duration (in milliseconds) for the slide change

    return () => clearInterval(interval);
  }, [data]);

  const renderRows = () => {
    const rows = [];
    const itemsPerRow = 4;
    if (data && data.results) {
      for (let i = 0; i < Math.ceil(data.results.length / itemsPerRow); i++) {
        const rowItems = data.results.slice(i * itemsPerRow, (i + 1) * itemsPerRow).map((movie: PopularMovie, id: number) => (
          <MovieList key={id} title={movie.title} poster_path={movie.poster_path} />
        ));
        rows.push(
          <div key={i} style={{ display: currentSlide === i ? 'grid' : 'none' }} className="grid grid-cols-2 gap-2 pt-4 sm:gap-4 sm:grid-cols-4">
            {rowItems}
          </div>
        );
      }
    }
    return rows;
  };

  return (
    <div>
      {renderRows()}
    </div>
  )
}

export default PopularList;
