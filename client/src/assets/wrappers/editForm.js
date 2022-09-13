import styled from "styled-components";

const Wrapper = styled.aside`
  .edit_userform {
    width: 550px;
    padding-block: 40px;
    height: 550px;
    background-color: var(--post-card-color);
    padding: 10px;
    border-radius: 20px;
    color: var(--color-secondary);

    & .form-input {
      background-color: var(--post-card-color);
      border-radius: 20px;
    }
    & button {
      width: 100px;
      margin-left:40%;
    }
  }

  .file-upload_container {
    display: flex;
    overflow: hidden;
    align-items: center;
    gap: 4%;
    

    & .file-content {
      width: 120px;
      height: 30px;
      background-color: var(--color-primary);
      backdrop-filter: blur(30px);
      white-space: nowrap;
      text-align: start;
      position: relative;
      border: 1px solid var(--color-secondary);
      overflow: hidden;

      & > .choose-image {
        position: absolute;
        top: 0;
        left: 7px;
        color: white;
        cursor: pointer;
        z-index: 1;
      }
      & > input[type="file"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
      }
    }

    & > img {
      width: 80px;
      aspect-ratio: 1/1;
    }
  }
`;

export default Wrapper;
