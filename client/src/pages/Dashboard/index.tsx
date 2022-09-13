import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import { connectWithSocketServer, UserDetails } from "../../socket/socketConnection";
import { useAppSelector } from "../../store";
import VideoChat from "../../components/VideoChat";
import IncomingCall from "../../components/IncomingCall"
import SharedLayout from "./SharedLayout";
import PostPage from "./PostPage";
import Postedit from "./post-edit"
import SharedLayoutv2 from "./SharedLayoutv2";
import Navbar  from "../../components/navbar";
import { useAppContext } from "../../context/appContext";


const Wrapper = styled("div")({
    width: "100%",
    height: "calc(100vh - 70px)",
    display: "flex",
    marginTop:"70px"
});

const Dashboard = () => {
    const {user, token} = useAppContext()
    const {videoChat: {localStream}} = useAppSelector((state) => {console.log(state) 
        return state
    });
    const navigate = useNavigate();
    
    useEffect(() => {
         if(user && token) {
            let tempuserDetails = Object.assign({
                email: user?.email,
                token: token,
                username: user?.username
            })
            // connect to socket server
            connectWithSocketServer(tempuserDetails as UserDetails);
        }
    }, [user,token, navigate]);


    return (
        <>            
        <Navbar/>
        <Wrapper>   
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            {localStream && <VideoChat />}
            <IncomingCall/>
        </Wrapper>
        </>
    );
};

export {Dashboard, SharedLayout, PostPage,Postedit ,SharedLayoutv2};
