import { PostCard } from "../components";

import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const PostsContainer = () => {
  const { getallPosts, userfeed ,isSubmit} = useAppContext();

  useEffect(() => {
    getallPosts();
  }, [isSubmit]);

  return (
    <div className="feeds">
      {userfeed.map((item, index) => {
        return <PostCard item={item} key={item._id} index={index}/>;
      })}
    </div>
  );
};

export default PostsContainer;
