import irene from "../assets/images/irene.jpg";
import Wrapper from "../assets/wrappers/AddpostForm";
import { MdAddLocationAlt } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useAppContext } from "../context/appContext";
import { Alert } from "../components";

const togglestate = {
  location: false,
  Image: false,
  images: "",
  description: "",
  userlocation: "",
};

const AddPostForm = () => {
  const [value, setValues] = useState(togglestate);
  const [selectedImages, setSelectedImages] = useState([]);
  const { createPost } = useAppContext();

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
    <Wrapper>
      <Alert />
      <form autoComplete="off" id="addform">
        <div className="create-post">
          <div>
            <img className="profile-photo" src={irene} alt="" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind, Diana?"
            id="create-post"
            name="description"
            onChange={handleChange}
            value={value.description}
          />
          <div className="upload-image">
            <label htmlFor="upload">
              <BsImage className="icons-image" />
              <input
                type="file"
                name="images"
                id="inputfile"
                onChange={onSelectedFile}
                multiple
              />
            </label>
          </div>
          <MdAddLocationAlt className="icons" onClick={toggleMember} />
          <button
            type="submit"
            className="btn2 btn2-primary"
            onClick={onSubmit}
          >
            Post
          </button>
        </div>
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
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
