import travelPlansData from "../assets/travel-plans.json";
import Image from "./Image";
import { useState } from "react";


function TravelList() {

    const [travelPlans, setTravelPlansData] = useState(travelPlansData);

    return (
        
        travelPlans.map((travel) => {
            return (
            
            <div className= "Destination"> 
            <div className= "DestinationImageContainer">
            <Image image={travel.image} />
            </div>
            <div className= "DestinationInfoContainer">
            <h1>{travel.destination}</h1> 
            <p>{travel.description}</p>
            <p> Price: {travel.totalCost}</p>
            <div className="CostLabels">
            {travel.totalCost < 350 ? <p> Great Deal </p> : <p> Premium </p>}
            {travel.allInclusive ? <p> All-inclusive </p> : <p> {null} </p>}
            </div>
            </div>
            </div>
         ) })

     )
    //
}

export default TravelList;


// 

/* <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

{showMovies &&
  movies.map(movie => {
    return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />;
  })} */
