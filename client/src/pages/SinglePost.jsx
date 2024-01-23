import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import Menu from "../components/Menu";

const SinglePost = () => {

  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id);

  const [posts, setposts] = useState({});

  useEffect(() => {
    console.log("ACTUALLY WORKING");
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setposts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [id]);

  return (
    <div className="single">
      <div className="content">
        <img src="https://source.unsplash.com/800x600/?technology" alt="" />
        <div className="user">
          <img
            src="https://source.unsplash.com/150x150/?portrait"
            alt="userimage"
            className="userimg"
          />
          <div className="info">
            <div className="username">John</div>
            <div>Posted 2 days ago</div>
          </div>
          <div className="modify">
            <Link to="/create?/edit=2">
              <img src={edit} alt="" />
            </Link>
            <Link>
              <img src={del} alt="" />
            </Link>
          </div>
        </div>

        <h1 className="title">Culinary Delights from Around the World</h1>
        <p className="main-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nemo deleniti nisi vitae eligendi beatae, ipsa sequi omnis quia totam
          optio voluptatum quas, quidem aliquid. Molestias, expedita. Atque,
          vero assumenda. Debitis incidunt animi quaerat! Magnam, eum repellat
          nisi ea dignissimos tempore, quos amet, officiis omnis repudiandae
          corporis voluptatem aliquam dolores ipsa! Quia, labore veritatis.
          Nostrum eum inventore nisi consequuntur praesentium. Corporis sed iste
          expedita eos a laboriosam asperiores repellendus atque beatae placeat
          quae corrupti fugit, delectus ut quas ex esse sint porro dolorum culpa
          doloremque nostrum? Quae dignissimos deserunt quo! Quidem quae dolorem
          quo quis sed molestiae corporis, maiores consequatur sunt, officia
          ipsum voluptatum quisquam labore mollitia. Placeat eveniet dolorem
          repudiandae harum ullam, architecto ipsum distinctio nesciunt aliquid
          nulla eaque? Ut doloremque corrupti nam?
          <br />
          Perspiciatis, fugit minima quas quidem vel obcaecati earum nobis
          quisquam, et sed quibusdam illum reiciendis, voluptas dicta natus fuga
          quasi a ex distinctio placeat. Reiciendis, nostrum! Minus eveniet
          asperiores dolorum aliquam deleniti dolores velit cupiditate, rem
          commodi aut enim adipisci quidem magnam? Aliquid error dicta inventore
          nemo mollitia autem eum, qui corrupti. Quaerat quasi cupiditate
          obcaecati! Nemo, alias. Ab eum dolorem, quo in nulla officiis
          doloribus non ex. Voluptas amet doloribus illum quod asperiores
          officiis molestiae possimus soluta, totam sed. Molestiae assumenda
          quod illo veritatis sequi! Fuga explicabo repellendus deserunt
          accusantium praesentium harum voluptatem repudiandae obcaecati
          consectetur alias, ad qui, esse maxime mollitia possimus
          necessitatibus reiciendis consequatur quia asperiores. Soluta nihil
          quasi beatae adipisci officia fugit. Fuga, obcaecati! Voluptate, earum
          consequuntur. Quis consectetur omnis magni nihil eius magnam voluptate
          repellat nobis itaque, voluptatibus distinctio aliquid ab eligendi
          saepe cupiditate eos harum recusandae fugiat atque praesentium quo.
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
      <Menu />
    </div>
  );
};

export default SinglePost;
