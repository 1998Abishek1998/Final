import styled from "styled-components";

const Wrapper = styled.aside`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

  .feed {
    font-family: "Poppins", sans-serif;

    background: var(--post-card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--card-color);
    position: relative;
  }
  .feed .head {
    display: flex;
    justify-content: space-between;
  }

  .feed .user {
    display: flex;
    gap: 1rem;
  }

  .feed .photo {
    border-radius: var(--card-border-radius);
    overflow: hidden;
    margin: 0.7rem 0;
    display: flex;
    overflow: hidden;
    position: relative;

    & > .display-none {
      display: none;
    }
    & > .likeanimation {
      position: absolute;
      top: 40%;
      right: 45%;
      font-size: 50px;
      color: white;
      animation: likeanimation 1s ease-in-out forwards;
    }
  }

  .feed .action-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    margin: 0.6rem;
  }
  .dot-btns {
    display: flex;
    width: max-content;
    margin-inline: auto;
  }
  .dot-btn {
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 1s;
    padding: 3px;
    background-color: var(--grey-300);
    margin-left: 4px;
  }
  .liked-by {
    display: flex;
  }

  .react-icons {
    color: var(--card-color) !important;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .love-icons {
    font-size: 1.5rem;
  }
  .comment-icons {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
  .interaction-buttons {
    display: flex;
    align-items: center;
  }

  .liked-by span {
    width: 1.4rem;
    height: 1.4rem;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--color-white);
    margin-left: -0.6rem;
  }

  .liked-by span:first-child {
    margin: 0;
  }
  .liked-by p {
    margin-left: 0.5rem;
  }

  .red-fill {
    color: red !important;
  }
  .action-icon {
    cursor: pointer;
  }

  @keyframes likeanimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Wrapper;
