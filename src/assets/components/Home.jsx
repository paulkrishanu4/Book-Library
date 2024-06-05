import { useState,useEffect } from "react"

import { Card } from "./Card";
import "./Home.css"
import {Link} from 'react-router-dom'

export const Home = () => {

  const [array,setArray]=useState([]);
  const [word,setWord] = useState("Spiderman");

  useEffect(()=>{
    let url=`https://openlibrary.org/search.json?q=${word}&limit=10&page=1`;
    fetch(url).then(response => response.json()).then(data => setArray(data.docs))

  },[word])


  return (
    <div className="parent">
      <div className="nav">

      <input type="text" value={word} onChange={(e)=>{setWord(e.target.value)}} id="search" placeholder="Search"></input>
      <button id="btn"><Link to='/Wishlist' style={{textDecoration:"none",color:"white"}}>wishlist</Link></button>
      </div>
      <div className="home">
      {
        
        array.map((cur,index)=>{
          return <Card key={index} book={cur}></Card>
        })
      
      }
      </div>
    </div>
  )
}
