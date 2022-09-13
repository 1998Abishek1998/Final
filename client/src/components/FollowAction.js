import { useAppContext } from "../context/appContext";
import { useState } from "react";


const FollowAction = ({ followinguser }) => {
  const { followUser, buttontype, unfollowUser } = useAppContext();
  const [followed, setFollowed] = useState(true);

  const togglefollow = () => {
  
    if (!followed) {
      followUser(followinguser);
      setFollowed(true);
    } else {
      unfollowUser(followinguser);
      setFollowed(false);
    }
  };

  return (
    <div>
      {followed ? (
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
          onClick={() => togglefollow()}
        >
          follow
        </button>
      )}
    </div>
  );
};

export default FollowAction;
