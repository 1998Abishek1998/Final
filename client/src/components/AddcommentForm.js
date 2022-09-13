import { RiSendPlaneFill } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/CommentForm";
import { useState } from "react";
import React from "react";

const AddcommentForm = React.memo(({ postId, setLcomment, list }) => {
  const { user, commentOnPost } = useAppContext();
  const [replys, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    // axios
    //   .post(
    //     `/api/v1/comment/post`,
    //     { content: replys, postId },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => setLcomment( res.data.newComment[0]));
    commentOnPost({ commentInfo: replys, postId });
    setLcomment()
    setText("")

  };
  return (
    <Wrapper>
      <div className="comment-form">
        <form action="">
          <div className="comment-container">
            <img className="profile-photo" alt="" src={user.profilePicture} />

            <input
              type="text"
              className="comment-input"
              placeholder="Add Comment"
              value={replys}
              onChange={handleChange}
            />

            <RiSendPlaneFill className="send-comment-icon" onClick={onSubmit} />
          </div>
        </form>
      </div>
    </Wrapper>
  );
});

export default AddcommentForm;
