import styled from "styled-components";

const Wrapper = styled.aside`
  padding: 2%;
  border-radius: 5%;
  .AllCommentSection {
    display: flex;
    align-items: center;
    position: relative;
    & > .comment-setting {
      background-color: var(--post-card-color);
      z-index: 1;

      padding: 2%;
      position: absolute;
      right: 0;
      gap: 5px;
      top: 15px;
      display: flex;
      flex-direction: column;

      & > .option {
        cursor: pointer;
      }
    }

    & > .eclipse-btn {
      position: absolute;
      top: 0;
      right: 0;
      color: blue;
      cursor: pointer;
    }

    & > .profile-photo {
      width: 25px;
    }

    & > .comment-info {
      & > .comment-info-content {
        display: flex;
        gap: 4px;
        margin-left: 4px;
        margin-top: 2px;
        & > .comment-username {
          color: var(--color-primary);
        }
      }
      & > .comment-content {
        margin-left: 7px;
        color: var(--color-secondary);
        font-size: 12px;
      }

      & > .comment-time {
        margin-left: 7px;
        font-size: 9px;

        color: grey;
        opacity: 0.4;
      }
    }
  }
`;

export default Wrapper;
