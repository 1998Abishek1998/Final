import React, { useState } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";
import Typing from "./Typing";
import { Dialog, DialogTitle } from "@mui/material";

const Wrapper = styled("div")({
    flexGrow: 1,
});


const ChatDetails = () => {
    const [ errorMessage, setErrorMessage] = useState(false)
    const handleClose =() =>{
        setErrorMessage(false)
    }
    return (
        <Wrapper>
            <Messages />
            <Typing/>
            {
                errorMessage ? <Dialog onClose={handleClose} open={errorMessage}>
                <DialogTitle>Use Of foul language</DialogTitle>
              </Dialog>:<></>
            }
            <NewMessageInput setErrorMessage={setErrorMessage} />
        </Wrapper>
    );
};

export default ChatDetails
