import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  // NICE! BUT BETTER STILL, COULD HAVE PASSED A POST PROP FROM <SinglePost> instead of editID.
  // Going to leave it regardless!!!

  const editId = useLocation().search.split("=")[1];
  useEffect(() => {
    const fetchpostCont = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/posts/${editId}`
        );
        setpostCont(res.data);
        setValue(res.data.cont);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (editId) fetchpostCont();
  }, [editId]);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [File, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const [postCont, setpostCont] = useState({});

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", File);

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const imgURL = File ? upload() : imageURL;
    try {
      const res = await axios.put(
        `http://localhost:5000/api/posts/${editId}`,
        {
          title,
          desc,
          img: imgURL ? imgURL : "",
          cat: cat,
          date: moment(Date.now()).format("YY-MM-DD HH:MM:SS"),
          cont: value,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      navigate(`/post/${editId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = async(e) => {
    e.preventDefault();
   const imgURL = File ? upload() : imageURL;
    try {
      const res = await axios.post(
        `http://localhost:5000/api/posts`,
        {
          title,
          desc,
          img: imgURL ? imgURL : "",
          cat: cat,
          date: moment(Date.now()).format("YY-MM-DD HH:MM:SS"),
          cont: value,
          uid: postCont.uid
        },
        { withCredentials: true }
      );
      console.log(res.data);
      navigate(`/post/${editId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create">
      <div className="content">
        <input
          type="text"
          name="title"
          id=""
          value={editId ? title : null}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <input
          type="text"
          name="desc"
          id=""
          value={editId ? desc : null}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Brief description of post.."
        />

        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b> Visibility: </b> Public
          </span>
          <div className="imgUpload">
            <input
              type="text"
              id="imgURL"
              placeholder="URL"
              onChange={(e) => setImageURL(e.target.value)}
            />
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              / Or Upload Image
            </label>
          </div>
          <div className="buttons">
            <button>Save as a draft </button>
            {editId ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={handleCreate}>Create</button>
            )}
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="science"
              id="Sscience"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technolology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="movies"
              id="movies"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="movies">Movies</label>
          </div>
          <div className="cat">
            <input
              type="radio"
             
              name="cat"
              value="lifestyle"
              id="lifestyle"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="lifestyle">Lifestyle</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              
              name="cat"
              value="politics"
              id="politics"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="politics">Politics</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
