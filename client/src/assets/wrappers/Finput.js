import styled from "styled-components";

const Wrapper = styled.aside`
  background-color: var(--post-card-color);
  border-radius: 20px;
  padding-inline: 4%;
  padding-block: 7%;
  backdrop-filter:blur(10px) .display-none {
    display: none;
  }
  .form-title {
    text-align: center;
  }
  .upload-image {
    width: 30px;
    overflow: hidden;
    padding-top: 7px;
  }
  label[for="upload"] {
    position: relative;

    cursor: pointer;
    overflow: hidden !important;
    font-size: 1rem;

    width: 9px;

    & > input {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      opacity: 0;
    }
  }

  .icons-image {
    color: rgba(164, 163, 163, 0.688);
    font-size: 29px;
  }

  .multiple-images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 7px;
    & > .image {
      position: relative;

      /* overflow: hidden; */

      margin-left: 10px;

      & > img {
        aspect-ratio: 1/1;
      }

      & > .image-cross {
        color: rgba(164, 163, 163, 0.688);
        position: absolute;
        top: -8px;
        right: -9px;
        font-size: 30px;
        backdrop-filter: blur(20px);
        cursor: pointer;
      }
    }
  }
  .linput {
    background-color: transparent;
  }
  .finput {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--smallText);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    background-color: transparent !important;
  }
  .input-container {
    width: 100%;
    border-radius: 30px;
    padding: 0.375rem 0.75rem;
    border-radius: 30px;
    border: none;
    background: var(--post-card-color);
    color: wheat;
  }
  .input-container::placeholder {
    color: white;
  }
`;

export default Wrapper;
