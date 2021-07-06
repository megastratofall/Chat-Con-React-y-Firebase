import "./Post.css";

const Post = ({title, text}) => {
  return (
    <div className="post">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default Post;
