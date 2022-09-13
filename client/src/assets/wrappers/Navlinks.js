import styled from "styled-components";

const Wrapper = styled.aside`
  .profile {
    padding: var(--card-padding);
    background: var(--post-card-color);
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;

    & > .profile-photo > img {
      object-fit: cover;
    }
  }
  .handle h4 {
    color: var(--card-color);
  }

  .sidebar {
    margin-top: 1rem;
    background: var(--post-card-color);
    border-radius: var(--card-border-radius);
    overflow: hidden;
  }

  .sidebar .menu-item {
    display: flex;
    align-items: center;
    height: 4rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .sidebar .menu-item:first-child.active {
    border-top-left-radius: var(--card-border-radius);
    overflow: hidden;
  }
  .sidebar .menu-item:hover {
    text-decoration: none;
    color: #fff;
  }
  .sidebar .menu-item:hover::before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      166deg,
      rgba(2, 0, 36, 0.9251050762101716) 0%,
      rgba(80, 20, 128, 1) 42%,
      rgba(17, 204, 192, 1) 97%
    );

    animation: shiny-btn1 3s ease-in-out 0s forwards;
  }
  .sidebar .menu-item:hover {
    opacity: 0.7;
  }
  

  @keyframes shiny-btn1 {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }

  .sidebar span {
    font-size: 1.4rem;
    color: var(--color-gray);
    margin-left: 2rem;
    position: relative;
  }

  .sidebar h3 {
    margin-left: 1.5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 1200px) {
    .profile {
      display: none;
    }

    .sidebar h3 {
      display: none;
    }

    .left {
      grid-column: 3/4;
      position: fixed;
      bottom: 0;
      right: 0;
    }

    .left .btn {
      display: none;
    }
  }
`;
export default Wrapper;
