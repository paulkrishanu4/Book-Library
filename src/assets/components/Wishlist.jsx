import { useContext } from "react"
import { GlobalContext } from "./Globalstate"
import "./Wishlist.css"
import {Link} from 'react-router-dom'


export const Wishlist = () => {
  const {watchlist, removeMovie} = useContext(GlobalContext);
  console.log(watchlist);
  return (
    <>
    <div className="nav">
     <h1 style={{textAlign: 'center'}}>My Favourites</h1>
     <button id="btn-home"><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link></button>
     </div>
    <div className="parent2">
     
    {
      watchlist.length== 0?<h1>Empty Wishlist</h1>:
      watchlist.map((cur,index)=>{
        return <div className="card2">
        <h2 key={index}>Title:{cur.title}</h2>
      <h4>Edition_count:{cur.edition_count}</h4>
      <button id="btn-wish" onClick={()=>{removeMovie(cur.edition_count)}}>Delete</button>
      
      </div>
      })

    }
    </div>
    </>
  )
}
