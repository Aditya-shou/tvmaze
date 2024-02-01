import { useEffect, useContext, useState } from "react";

import ShowsContext from "../context/shows/showsContext";

import Loader from "../components/Loader";


const About = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement the logic for submitting the form
    // You can access form values using e.target.elements
    console.log('Form submitted:', e.target.elements);
  };
  useEffect(() => {
    getSingleShow(match.params.id);

  }, []);
  const handleBookTicket = () =>{
    setIsFormOpen(true);
  }

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
              <div>
                <button onClick={handleBookTicket} className="btn">Book Movie Ticket</button>
                {isFormOpen && (
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              {/* Add other form fields as needed */}
              <button type="submit" className="btn">Submit</button>
              
            </form>
          )}
              </div>
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default About;