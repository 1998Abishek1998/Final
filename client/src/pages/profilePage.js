import { useAppContext } from "../context/appContext";
// import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";

import { useEffect } from "react";
import Wrapper from "../assets/wrappers/Profile";
import { GoGlobe } from "react-icons/go";
import { useState } from "react";
import { HiLocationMarker, HiUser } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import {
  Loading,
  PostCard,
  Followbtn,
  UserForm,
} from "../components";

const Profile = () => {
  const {
    userProfile,
    profileUser,
    profilePost,
    isLoading,
    friends
  } = useAppContext();
  const { id: userId } = useParams();

  useEffect(() => {
    userProfile(userId);
  }, [userId]);

  const [tab, tabtoggle] = useState(1);

  const ontoggle = (index) => {
    tabtoggle(index);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-content">
          <div className="profile-images">
            <img
              src={profileUser.profilePicture}
              alt=""
              className="profile-photo"
            />

            <img
              src="https://thumbs.gfycat.com/AliveFreshHeifer-size_restricted.gif"
              alt=""
              className="profile-cover"
            />
            <span className="profile-username">{profileUser.username}</span>
            <Followbtn items={profileUser} clicked={() => ontoggle(6)} />
          </div>
          <div className="profile-info">
            <div className="profile-info-content">
              <button
                onClick={() => ontoggle(1)}
                className={tab === 1 ? "tab active" : "tab"}
              >
                Timeline
              </button>
              <button
                onClick={() => ontoggle(2)}
                className={tab === 2 ? "tab active" : "tab"}
              >
                followers
              </button>
              <button
                onClick={() => ontoggle(3)}
                className={tab === 3 ? "tab active" : "tab"}
              >
                following
              </button>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-intro">
              <div className="intro-header">
                <GoGlobe />
                <h1> Intro</h1>
              </div>
              <div>
                <HiUser /> {profileUser.name}
              </div>
              <span>
                <HiLocationMarker /> {profileUser.location}
              </span>
              <p>
                <MdDescription /> {profileUser.email}
              </p>
            </div>
            <div className={tab === 5 ? "display-none" : "photo-section"}>
              <div className="photo-section-header">
                <h1>photo</h1>
                <button className="no-btn" onClick={() => ontoggle(5)}>
                  view all
                </button>
              </div>
              <div className="profile-collection">
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={tab === 5 ? "profile-posts" : "display-none"}>
            {profilePost.map((item, index) => {
              return <img src={item.images[0]} alt="" key={item._id} />;
            })}
          </div>

          <div className={tab === 1 ? "timeline" : "display-none"}>
            {profilePost.map((item, index) => {
              return <PostCard item={item} index={item} key={index} />;
            })}
          </div>

          <div className={tab === 6 ? "" : "display-none"}>
            <UserForm info={profileUser} />
          </div>

          <div className={tab === 2 ? "" : "display-none"}>
            {friends.map((item) => {
              return (
                <div className="following-lists ">
                    <img
                      className="profile-photo"
                      src={item.profilePicture}
                      alt=""
                    />

                    <Link to={`/profile/${item._id}`}>
                    <div className="following-info">
                      <span>{item.username}</span>
                      <div>{item.name}</div>
                    </div>
                    </Link>
                  </div>
              );
            })}
          </div>

          <div className={tab === 3 ? "" : "display-none"}>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
