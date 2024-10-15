import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect, useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    } catch (error) {
      console.log("error aa gya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="flex justify-center items-center mt-[100px] px-4">
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4 min-h-[80vh]">
              {
                posts.map((post) => (
                  <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <Product key={post.id} post={post} />
                  </div>
                ))
              }
            </div>) :
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-600 text-lg font-semibold">No Data Found</p>
            </div>
      }
    </div>
  );
};

export default Home;
