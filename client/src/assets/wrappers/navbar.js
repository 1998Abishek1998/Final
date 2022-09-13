import styled from "styled-components";

const Wrapper = styled.aside`
  nav {
    width: 100%;
    background: var(--post-card-color);
    padding: 0.7rem 0;
    position: fixed;
    top: 0;
    left: 0;
    
    z-index: 10;
    
  }
  .log {
    color: white;
  }
  nav .container {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3%;
  }
  .search-bar {
    background: var(--post-card-color);
    border-radius: var(--border-radius);
    padding: var(--search-padding);
    display: flex;
    align-items: center;
    position: relative;
  }

  .search-bar input[type="search"] {
    background: transparent;
    width: 30vw;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: var(--color-light);
    border: none;
    outline: none;
  }

  nav .search-bar input[type="search"]::placeholder {
    color: var(--color-gray);
  }
  nav .create {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .btn-none {
    border: none;
    background-color: transparent;
  }
  .btn-purple {
    border-radius: var(--border-radius);
    background-color: var(--color-primary);
    font-weight: bold;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: max-content;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .btn-container {
    position: relative;
  }

  /* ======================================= MEDIA QUERIES FOR SMALL LAPTOPS AND Mobile ================================== */

  @media screen and (max-width: 992px) {
    nav .log {
      display: none;
    }
    .profile-picture {
      justify-self: end;
    }
    .btn-purple {
      display: none;
    }
    .search-bar input[type="search"] {
      width: 70vw;
      justify-self: center;
    }
  }
`;

export default Wrapper;
