import { useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

const Home = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  const handleBookTicket = () =>{
    
  }
  return (
    <div className="homepage">
      <Search />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;