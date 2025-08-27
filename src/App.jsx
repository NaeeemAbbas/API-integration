import { useEffect, useState } from "react";
import { getPosts } from "./index";
import "./App.css";
import PostCards from "./Components/PostCards";

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

  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <>
      <div className="flex mx-auto  max-w-8xl p-2 flex-wrap justify-center items-center">
    {
      data ? data.map((e) => <PostCards  id={e.id}  title={e.title} pricing={e.price}  body={e.description.substring(0, 200) + "..."}category={e.category} image={e.image} />)  : <p>No data</p>
    }

      </div>
    </>
  );
}

export default App;
