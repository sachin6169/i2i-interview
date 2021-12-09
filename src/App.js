import React,{useState,useEffect} from 'react';
import {useLocation} from "react-router-dom"
import apiJson from "./Assets/api.json"
import './App.css';
console.log("apiJson",apiJson)
function App() {
  const abc = useLocation()
console.log("abc",abc)
const [user, setUser] = useState('')
const [password, setPassword] = useState('')
const [items, setItems] = useState([]);

const [gallery, setGallery] = useState([])

useEffect(() => {
  fetch("https://www.mmobomb.com/api1/games")
    .then(res => res.json())
    .then(
      (result) => {
        
        setItems(result);
      },
      
      
    )
}, [])



const handelSubmit = (e)=>{
  e.preventDefault()
  setGallery(apiJson)
}

  return (
    <div className="App">
      <div>
        <form onSubmit={handelSubmit}>
          <input type='text' placeholder='user id' value={user} onChange={(e)=> setUser(e.target.value)}/>
          <input type='text' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <input type='submit'/>
        </form>
      </div>

    </div>
  );
}

export default App;
