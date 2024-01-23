import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

// const dummyPosts = [
//   {
//     id: 1,
//     title: "Exploring the Beauty of Nature",
//     desc: "A journey through scenic landscapes and breathtaking views that will leave you in awe.",
//     image: "https://source.unsplash.com/800x600/?nature",
//   },
//   {
//     id: 2,
//     title: "The Art of Photography",
//     desc: "Uncover the secrets behind captivating photographs and learn the artistry of visual storytelling.",
//     image: "https://source.unsplash.com/800x600/?photography",
//   },
//   {
//     id: 3,
//     title: "Culinary Delights from Around the World",
//     desc: "Embark on a culinary adventure as we explore diverse flavors and mouth-watering dishes from different cultures.",
//     image: "https://source.unsplash.com/800x600/?food",
//   },
//   {
//     id: 4,
//     title: "Tech Trends: A Glimpse into the Future",
//     desc: "Stay ahead of the curve with insights into the latest technological innovations shaping our future.",
//     image: "https://source.unsplash.com/800x600/?technology",
//   },
//   {
//     id: 5,
//     title: "Mindful Living: Embracing Balance",
//     desc: "Discover the principles of mindfulness and achieve a harmonious balance between work, life, and well-being.",
//     image: "https://source.unsplash.com/800x600/?mindfulness",
//   },
// ];



 



const Home = () => {

  const location = useLocation();
  const cat = location.search
  console.log(cat)

  const [posts, setposts] = useState([])
  
  useEffect(() => {
    
    const fetchPosts = async () => {
      
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${cat}`);
        setposts(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
      
    };
    fetchPosts();
  }, [cat])
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            
            <div className="img">
              <img src={post.img} alt="post image" />
            </div>

            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home