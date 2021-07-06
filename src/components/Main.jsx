import { useState } from "react";
import "./Main.css";
import Post from "./Post.jsx";
import TextField from "@material-ui/core/TextField";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState({
    title: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title && input.text) {
      setPosts([input, ...posts]);
      setInput({
        title: "",
        text: "",
      });
    } else {
      alert("Add your post here");
    }

    console.log(posts);
  };

  return (
    <div className="main">
      <div className="main_input">
        <form noValidate autoComplete="off">
          <div className="main__inputForm">
            <TextField
              id="standard-basic"
              label="Title"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
            <TextField
              className="main__inputFormText"
              id="outlined-basic"
              label="Enter your post here"
              variant="outlined"
              value={input.text}
              onChange={(e) => setInput({ ...input, text: e.target.value })}
            />
            <button type="submit" onClick={handleSubmit}></button>
          </div>
        </form>
      </div>
      <div className="main__posts">
        {posts.map(({ title, text }) => (
          <Post title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Main;
