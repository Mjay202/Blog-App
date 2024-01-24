import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from 'react-router-dom';


const Create = () => {
  
const [value, setValue] = useState("Let's publish!");
const [title, setTitle] = useState("");
const [File, setFile] = useState(null);
const [cat, setCat] = useState("");
  
  const location = useLocation().search
  console.log(location);
  return (
    <div className="create">
      <div className="content">
        <input type="text" name="Title" id="" placeholder="Title" />
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
          <input type="file"/>
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft </button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="Sscience" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technolology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="movies" id="movies" />
            <label htmlFor="movies">Movies</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="lifestyle" id="lifestyle" />
            <label htmlFor="lifestyle">Lifestyle</label>
          </div>
          <div className="cat">

          <input type="radio" name="cat" value="politics" id="politics" />
          <label htmlFor="politics">Politics</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create