import styled from "styled-components"

const Wrapper = styled.aside`
  .card {
    width: 400px;
  }

  .card__content {
    text-align: center;
    position: relative;
    padding: 15em 5em;
    transition: transform 3s;
    // background: pink;
    transform-style: preserve-3d;
  }

  .card:hover .card__content {
    transform: rotateY(0.5turn);
  }

  .card__front,
  .card__back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5em 3em;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    display: grid;
    align-content: center;
  }

  .card__front {
    background-color: var(--clr);
    background-size: cover;
    background-blend-mode: overlay;
    color: #333;
  }

  .card__front::before {
    content: "";
    position: absolute;
    --spacer: 1em;
    top: var(--spacer);
    bottom: var(--spacer);
    left: var(--spacer);
    right: var(--spacer);
    border: 3px solid currentColor;
    transform: var(--level-one);
  }

  .card__title {
    font-size: 3.5rem;
    transform: var(--level-three);
    order: 2;
    text-transform: uppercase;
  }

  .card__subtitle {
    transform: var(--level-two);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.75rem;
    font-weight: var(--fw-bold);
    opacity: 0.7;
  }

  .card__body {
    transform: var(--level-two);
    font-weight: var(fw-normal);
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .card__back {
    transform: rotateY(0.5turn);
    color: var(--clr);
    background: #333;
  }
`;

export default Wrapper;