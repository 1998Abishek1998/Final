import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddFriendDialog from "./AddFriendDialog";

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
      <>
          <Button
              variant="contained"
              sx={{
                  bgcolor: "#5865F2",
                  color: "white",
                  textTransform: "none",
                  fontSize: "22px",
                  fontWeight: 500,
                  margin: "15px 0px",
                  width: "10px",
                  height: "30px",
                  background: "#3ba55d",
                  zIndex: 100
              }}
              onClick={handleOpenAddFriendDialog}
          >
            +
          </Button>
          <AddFriendDialog
              isDialogOpen={isDialogOpen}
              closeDialogHandler={handleCloseAddFriendDialog}
          />
      </>
  );
};

export default AddFriendButton;
