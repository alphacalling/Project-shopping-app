import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect, useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true);

     try{
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
     }

     catch(error){
      console.log("error aa gya");
      setPosts([]);
     }
     setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  }, [])

  return (
    <div className="flex justify-center items-center mt-[100px]">
      {
        loading ? <Spinner /> :
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          posts.map( (post) => (
          <Product key= {post.id} post={post} />
          ))
        }
        </div>) : 
        <div className="flex justify-center items-center ">
          <p>No Data Found</p>
        </div>
        }
        </div>
    );
};

export default Home;
