import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import AddFriendButton from "../FriendsSideBar/AddFriendButton";


const MainContainer = styled("div")({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225",
    overflow:"hidden"
});

const SideBar = () => {
  return (
      <MainContainer sx={{ display: { xs: "none", sm: "flex" } }}>
          <MainPageButton />
          <AddFriendButton/>
      </MainContainer>
  );
};

export default SideBar;
