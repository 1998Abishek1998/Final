import { ImagePreview, Alert, PostCard } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Postedit = () => {
  const { id: postid } = useParams();

  const { detailspost, postInfo,isEditing } = useAppContext();

  useEffect(() => {
    detailspost(postid);
  }, [postid,isEditing]);

  return (
    <div className="middle">
      <Alert />

      <ImagePreview postInfo={postInfo} />
      {/* <PostCard item={postInfo} /> */}
    </div>
  );
};
export default Postedit;
