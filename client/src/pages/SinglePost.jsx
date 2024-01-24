import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";

const SinglePost = () => {

 

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
   const navigate = useNavigate();
  const id = location.pathname.split('/')[2];


  const [postCont, setpostCont] = useState({});

  useEffect(() => {
    
    const fetchpostCont = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setpostCont(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchpostCont();
    console.log(postCont.id)
  }, [id]);

  const handleDelete = async() => {
    
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={postCont.img} alt="" />
        <div className="user">
          {postCont.userImg && (
            <img src={postCont.userImg} alt="userimage" className="userimg" />
          )}
          <div className="info">
            <div className="username">{postCont.uname}</div>
            {postCont.date && (
              <div>Posted {moment(postCont.date).fromNow()}</div>
            )}
          </div>
          {currentUser && currentUser.uname === postCont.uname && (
            <div className="modify">
              <Link to={`/create/?edit=${id}`}>
                <img src={edit} alt="" />
              </Link>
              <Link>
                <img src={del} alt="" onClick={handleDelete} />
              </Link>
            </div>
          )}
        </div>

        <h1 className="title">{postCont.title}</h1>
        <p className="main-content">
          {postCont.cont}
          <br />
          Nostrum unde voluptates nam suscipit quas, culpa, sed harum modi vitae
          qui sequi dignissimos adipisci minus excepturi exercitationem iste
          sint at ut! Ex numquam laudantium, aliquam iusto cumque ab veniam.
          Vero dolorem aut eligendi, qui neque veniam velit, dignissimos, ab
          cumque reprehenderit odit accusantium voluptas voluptatem. Maxime
          inventore omnis corrupti id necessitatibus temporibus? Nihil
          consequuntur eaque natus tempora, distinctio vero! Numquam quos fuga
          pariatur saepe, cumque nesciunt eius totam libero at adipisci
          voluptates facilis atque sed, dicta, unde a! Deleniti architecto ut
          commodi unde necessitatibus maxime magni aut facere soluta? Quisquam
          tempora iusto dolor quaerat doloribus praesentium necessitatibus
          accusantium ex odit quis saepe ad corporis asperiores aliquid dolore
          veritatis quia et natus beatae porro, vero incidunt! Dolorem, error
          sed? Rem? Voluptatem, delectus vitae. Incidunt assumenda illum, natus
          asperiores id cupiditate, velit beatae officiis quam quibusdam nihil
          nostrum voluptatum dolor dolorem, autem harum sint quas dolore
          consequuntur ex temporibus. Magni, quos! Quam est neque repellendus
          dolor fugit, dolores aut repudiandae soluta natus ullam vitae
          accusantium et, illum doloribus aspernatur sint molestiae officia ea
          adipisci excepturi. Blanditiis voluptatum quas nobis animi nisi? Ex
          possimus totam esse dolore praesentium, soluta beatae corrupti
          repellendus asperiores minima nihil facilis, rem excepturi recusandae,
          dicta itaque voluptate alias enim! Fugiat et ut non odit nemo
          temporibus corporis? Amet optio perferendis suscipit hic distinctio
          possimus, repellat labore consequuntur nam aspernatur molestiae
          assumenda recusandae rerum iure unde veniam at! Iste deleniti,
          eligendi ipsam ipsa expedita debitis. Ipsa, rerum exercitationem.
          Doloribus, eius ea eveniet, excepturi impedit quod eligendi odio enim
          accusantium minima magnam delectus ipsa voluptatum, mollitia a
          aspernatur ad quo velit dignissimos ipsam. Natus, ducimus dignissimos.
          Atque, modi beatae! Quaerat doloribus nemo, unde dolor consequatur
          odit harum saepe ex reiciendis natus debitis id, blanditiis impedit
          temporibus, deleniti facilis quibusdam! Quo labore vitae dicta ipsa
          consequatur voluptatum ea nostrum magnam. Inventore architecto itaque
          temporibus aperiam labore quibusdam eum dolor unde voluptatum quo
          excepturi, facilis, praesentium iusto nisi rem, eos qui amet. Facere
          aut perspiciatis similique id repellat, sit eius quae.
        </p>
      </div>
      <Menu cat={ postCont.cat} />
    </div>
  );
};

export default SinglePost;
