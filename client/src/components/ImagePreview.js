import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Finput";
import { TiDelete } from "react-icons/ti";
import { RiImageAddFill } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import { FormInput } from "../components";

const togglestate = {
  description: "",
  location: "",
  images: "",
};
const ImagePreview = ({ postInfo }) => {
  const { ImageToEdit, postUpdate, isLoading } = useAppContext();
  const [value, setValues] = useState(togglestate);
  const [filepath, setFilePath] = useState([]);
  const [networkpath, setNetworkpath] = useState([]);
  const [selectedImages, setSelectedImages] = useState(ImageToEdit);

  useEffect(() => {
    setSelectedImages(ImageToEdit);
    setNetworkpath(ImageToEdit);
    
  }, [ImageToEdit]);

  const handleChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
    // formData.append([e.target.name],e.target.value)
  };

  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    setValues({ ...value, images: selectedFilesArray });
    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setFilePath(imageArray);
    const combineArray = selectedImages.concat(imageArray);
    setSelectedImages(combineArray);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { location, description, images } = value;
    const postId = postInfo._id;
    

    const postInformation = {
      images,
      networkpath,
      location,
      description,
      postId,
    };

    postUpdate({ postInformation });
  };
  return (
    <Wrapper>
      <h2 className="form-title"> Add Post</h2>
      <form className="upload-form">
        <FormInput
          type="text"
          name="location"
          placeholder={postInfo.location}
          handleChange={handleChange}
          value={value.location}
        />
        <FormInput
          type="text"
          name="description"
          placeholder={postInfo.description}
          handleChange={handleChange}
          value={value.description}
        />
        <div className="image-preview">
          <div className="upload-image">
            <label htmlFor="upload">
              <RiImageAddFill className="icons-image" />
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
                  <div key={postInfo._id + postInfo.userid.username + index} className="image">
                    <img src={image} alt="" />
                    <TiDelete
                      className="image-cross"
                      onClick={() => {
                        setNetworkpath(
                          networkpath.filter(
                            (indexImage) => indexImage !== image
                          )
                        );
                        setFilePath(
                          filepath.filter((indexImage) => indexImage !== image)
                        );
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
        </div>
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={onSubmit}
        >
          save
        </button>
      </form>
    </Wrapper>
  );
};

export default ImagePreview;
