import irene from "../../assets/images/irene.jpg";
import { MdAddLocationAlt } from "react-icons/md";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useAppContext } from "../../context/appContext";
import { Avatar, Card, CardActions, CardContent, CardHeader, Popover, TextField} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

const togglestate = {
  location: false,
  Image: false,
  images: "",
  description: "",
  userlocation: "",
};

 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: 345
};

const ModalAddPostForm = ({handleClose}) => {
  const [value, setValues] = useState(togglestate);
  const [selectedImages, setSelectedImages] = useState([]);
  const { createPost } = useAppContext();

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const toggleMember = () => {
    setValues({ ...value, location: !value.location });
  };

  const handleChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };

  // const imageHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     if (reader.readyState === 2) {
  //       console.log("hhello");
  //       setValues({ ...value, images: reader.result });
  //     } else {
  //       console.log("error");
  //     }
  //     reader.readAsDataURL(e.target.files[0]);
  //     console.log(value.images);
  //   };
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const { images, userlocation, description } = value;

    const userpost = { images, userlocation, description };
   

    createPost({ userpost });
    setValues(togglestate);
    setSelectedImages([]);
    handleClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    setValues({ ...value, images: selectedFilesArray });
    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
  };
  return (
    <Card sx={style}>
      <form autoComplete="off" id="addform" style={{maxWidth: '100%'}}  onSubmit={(e) => onSubmit(e)} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img className="profile-photo" src={irene} alt="" />
          </Avatar>
        }
        title="Add Post"
        subheader={<div>
          <MdAddLocationAlt className="icons" onClick={toggleMember} 
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            />
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
            }}
            style={{
              padding:'10px' 
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            Add Location
          </Popover>
        </div>}
      />
      <CardContent>
        <div>
          <input
            type="text"
            placeholder="enter location"
            className={!value.location ? "display-none" : "location-input"}
            name="userlocation"
            onChange={handleChange}
            value={value.userlocation}
          />
        </div>
        <TextField
        color="primary"
          label=""
          multiline
          rows={6}
          style={{
            width:'100%'
          }}
          placeholder="What's on your mind, Diana?"
          name="description"
          onChange={handleChange}
          value={value.description}
        />
          <div className="upload-image">
            <label htmlFor="upload" >
              <input
                type="file"
                name="images"
                id="inputfile"
                onChange={onSelectedFile}
                multiple
              />
            </label>
          </div>
        <div className="multiple-images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} alt="" />
                  <ImCross
                    className="image-cross"
                    onClick={() => {
                      setSelectedImages(
                        selectedImages.filter(
                          (indeximage) => indeximage !== image
                        )
                      );
                    }}
                  />
                </div>
              );
            })}
        </div>
      </CardContent>
      <CardActions>
        <button
          type="submit"
          className="btn2 btn2-primary"
          >
            Post
        </button>
        <button 
          type="reset"
          className="btn2 btn-danger"
          onClick={() => handleClose()}
          >
            Close
          <AiOutlineClose />
        </button>
      </CardActions>
      </form>
    </Card>
  );
};

export default ModalAddPostForm;
