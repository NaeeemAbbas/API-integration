

import { useEffect } from 'react'
import {getPosts } from './index'
import './App.css'

function App() {

//   const [data, setData] = useState([]);

// const response =  axios.get("https://fakestoreapi.com/products")
//   .then(function (response) {
//     setData(response.data)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

//   console.log(data[0]);

  

useEffect (()=>{
  getPosts().then((posts) =>console.log(posts));
},[]);
  return (
    <>
     <h1>Fate store API implementation</h1>

    </>
  )
}

export default App
