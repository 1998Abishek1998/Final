import styled from "styled-components";
import bgimg from "../images/neon-ball.png";

const Wrapper = styled.aside`
  background-image: url(${bgimg});
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  section {
    background-color: var(--bg-color);
    height: 100vh;
    overflow: hidden;
    backdrop-filter: blur(var(--bg-blur));
  }
  .middle {
    height: calc(90vh - 10px);
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
  }

  .dashboard {
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
  }

  main {
    position: relative;
    top: 5.4rem;
  }
  main .container {
    display: grid;
    grid-template-columns: 18vw auto 20vw;
    column-gap: 2rem;
    position: relative;
    background: hsl(255 255 255 0.4);
  }

  @media screen and (max-width: 1200px) {
    .container {
      width: 96%;
    }
    main .container {
      grid-template-columns: 2/2;
      gap: 1rem;
    }
    .left {
      width: 5rem;
      z-index: 5;
    }
    .right {
      display: none;
    }

    main .container .left .profile {
      display: none;
    }

    .sidebar h3 {
      display: none;
    }
    .left .btn {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    main .container {
      grid-template-columns: 1/1;
      gap: 0;
    }
    main .container .left {
      grid-column: 3/4;
      position: fixed;
      bottom: 0;
      right: 0;
    }
    .dashboard {
      width: 96%;
    }

    /* ======================================= notification popup ================================== */

    main .container .middle {
      grid-column: 1/3;
    }
    main .container .right {
      display: none;
    }
  }
`;

export default Wrapper;
