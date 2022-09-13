import styled from "styled-components";

const Wrapper = styled.aside`
  .profile {
    background-color: var(--post-card-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 20px;
    overflow: hidden;
    height: 90vh;
    overflow-y: scroll;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
  }

  .profile-images {
    position: relative;
    & > .profile-photo {
      width: 80px;
      aspect-ratio: 1/1;
      border-radius: 50px;
      position: absolute;
      left: 30px;
      bottom: -10px;
    }
    & > .profile-username {
      position: absolute;
      left: 15%;
      bottom: 14%;
      font-weight: bolder;
      font-size: 22px;
    }

    & > .follow-btn {
      position: absolute;
      right: 3%;
      bottom: 14%;
      background-color: var(--post-card-color);
      backdrop-filter: blur(20px);
      padding-block: 10px;
      border-radius: 20px;
      min-width: 100px;
      border: 2px solid var(--color-primary) !important;
    }
    & > .profile-cover {
      aspect-ratio: 1/0.2;
    }
  }

  .profile-info {
    width: 100%;

    & > .profile-info-content {
      width: 100%;
      align-items: center;
      padding-block: 20px;
      display: flex;
      justify-content: center;
      gap: 5%;
      padding-inline: 15%;
      background-color: var(--post-card-color);
    }
  }

  .pff-count {
    display: grid;
    grid-template-columns: repeat(3, 1Fr);
  }

  .profile-container {
    display: grid;
    grid-template-columns: 18vw auto;
    gap: 5%;
    margin-left: 2%;

    & > .profile-left {
      & > .profile-intro {
        margin-bottom: 20px;
        background-color: var(--post-card-color);
        padding-left: 5%;
        padding-block: 4%;
        height: max-content;

        border-radius: 10px;
        color: var(--color-link);
        position: sticky;
        top: 0;

        & > .intro-header {
          display: flex;
          align-items: center;

          gap: 10px;
          margin-bottom: 10px;
          color: var(--color-secondary);
        }
      }
    }

    .photo-section {
      background-color: var(--post-card-color);
      padding: 3%;
      border-radius: 15px;
      color: var(--color-secondary);
      position: sticky;
      top: 140px;

      & > .photo-section-header {
        display: flex;
        justify-content: space-between;

        .no-btn {
          background-color: transparent;
          border: none;
          color: var(--color-grey);
          cursor: pointer;
        }
      }

      .profile-collection {
        margin-top: 10px;
        background-color: var(--post-card-color);
        padding: 2%;
        display: grid;
        grid-template-columns: repeat(3, 1Fr);
        gap: 2%;

        & > img {
          aspect-ratio: 1/1;
        }
      }
    }
  }

  .profile-posts {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1Fr);
    background-color: var(--post-card-color);
    padding: 2%;
    & > img {
      aspect-ratio: 1/1;
    }
  }

  .tab {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding-inline: 3%;
    padding-bottom: 1%;
    color: white;
    font-weight: 500;
    color: var(--card-color);

    &.active {
      border-bottom: 2px solid var(--color-primary);
    }
  }

  .timeline {
    width: 550px;
  }

  .following-lists {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    min-width: 400px;
  }

  @media screen and (max-width: 720px) {
    .profile {
      margin: 0;
      position: absolute;
      left: 0;
      transform: translateX(-20px);
    }
    .timeline {
      padding: 0;
      margin: 0;
      width: 500px;
      transform: translateX(-20px);
    }
    .profile-container {
      display: flex;
      margin-left: 0;
    }
    .profile-intro,
    .photo-section {
      display: none;
    }
  }
`;

export default Wrapper;
