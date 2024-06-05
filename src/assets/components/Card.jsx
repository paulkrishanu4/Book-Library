import "./Card.css"
import { useContext } from "react";
import { GlobalContext } from "./Globalstate";


export const Card = ({book}) => {

  const{
    addMovie, watchlist
  }= useContext(GlobalContext);
  
  let storedBook= watchlist.find(o=>o.edition_count === book.edition_count);
  const readDisabled = storedBook ? true : false;
  return (
    <div className="card">
      <h2>Title:{book.title}</h2>
      <h4>Edition_count:{book.edition_count}</h4>
      <button id="btn-wish" disabled={readDisabled}   onClick={()=>{alert("Added to Wishlist");addMovie(book);}}>Add to wish list</button>
    </div>
  )
}
