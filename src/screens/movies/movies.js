import React,{useState,useEffect} from "react";
import Card from "../../styles/card/Card";

const Movies = () => {
  const [moveiseData, setmoveiseData] = useState([]);
  useEffect(() => {
    getMoviesData()
  }, []);
  const getMoviesData = () =>{
    axios.get()
  }
  return <div className="movies"><Card imageURL="/" title="" year="" rating=""/></div>;
};
export default Movies;
