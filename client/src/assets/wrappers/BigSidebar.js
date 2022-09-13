import styled from "styled-components";

const Wrapper = styled.aside`
  .left {
    height: max-content;
    position: sticky;
    top: var(--sticky-top-left);
  }

  .handle {
    color: black;
  }

  /* ======================================= MEDIA QUERIES FOR SMALL LAPTOPS AND BIG TABLETS ================================== */
  @media screen and (max-width: 1200px) {
    .container {
      width: 96%;
    }
    main .container {
      grid-template-columns: 5rem auto 30vw;
      gap: 1rem;
    }
    .left {
      width: 5rem;
      z-index: 5;
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
`;

export default Wrapper;
