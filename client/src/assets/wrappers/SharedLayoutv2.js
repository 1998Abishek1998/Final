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

  .dashboardv {
    padding-left: 9.8vw;

    display: flex;
    flex-direction: column;
  }

  main {
    position: relative;
    top: 5.4rem;
  }
  main .containerv {
    display: grid;
    grid-template-columns: 18vw auto;
    column-gap: 2rem;
    position: relative;
    background: hsl(255 255 255 0.4);
  }

  @media screen and (max-width: 1200px) {
    .container {
      width: 96%;
    }
    main .containerv {
      display: flex;
      gap: 1rem;
    }
    .left {
      position: fixed;
      top: 5rem;
      right: 0;
      width: 5rem;
      z-index: 5;
    }
    .right {
      display: none;
    }

    main .container .left .profile {
      display: none;
    }
  .dashboardv{
    padding: 5vw;

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
      gap: 0;
    }
    main .container .left {
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
