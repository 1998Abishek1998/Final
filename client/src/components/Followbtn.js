import { useAppContext } from "../context/appContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



const Followbtn = ({items,clicked}) => {
    const {
      user,
    
      
      
      
      followUser,
      buttontype,
      unfollowUser,
    } = useAppContext();
  const [followed, setFollowed] = useState(false);
  const { id: userId } = useParams();

  useEffect(() => {
    if (items.followers?.find((item) => item === user._id)) {
      setFollowed(true);
    } else {
      setFollowed(false);
    }
  }, [userId, items.followers, user._id]);

  
    const togglefollow = () => {
      if (!followed) {
        followUser(userId);
        setFollowed(true);
      } else {
        unfollowUser(userId);
        setFollowed(false);
      }
    };

   


  return user._id === items._id ? (
    <button className="btn btn-follow follow-btn" onClick ={clicked}>Edit Profile</button>
  ) : followed ? (
    <button
      className="btn btn-follow follow-btn"
      disabled={buttontype}
      onClick={() => togglefollow()}
    >
      unfollow
    </button>
  ) : (
    <button
      className="btn btn-follow follow-btn"
      disabled={buttontype}
      onClick={()=>togglefollow()}
    >
      follow
    </button>
  );
};

export default Followbtn;
