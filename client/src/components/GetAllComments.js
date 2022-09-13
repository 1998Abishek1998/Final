import Wrapper from "../assets/wrappers/GetAllComments";
import { useAppContext } from "../context/appContext";
import React, { useState, useEffect } from "react";

import axios from "axios";

import {SingleComment} from "../components"

const GetAllComments = React.memo(({ postId,change,cmtDelete }) => {
  const { token } = useAppContext();

  const [ListOfComment, setComment] = useState([]);

  const listOutComment = ({ comment }) => {
    setComment(comment);
  };
  useEffect(() => {
    axios
      .get(`/api/v1/comment/get/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => listOutComment({ comment: res.data.comment }));
  }, [postId, token,change]);

  return (
    <Wrapper>
      {ListOfComment.map((item) => {
        return (

          <SingleComment item={item} key={item._id} cmtDelete= {cmtDelete}/>
       
        );
      })}
    </Wrapper>
  );
});

export default GetAllComments;
