import styled from "styled-components";

const Wrapper = styled.aside`
  .right {
    height: max-content;
    position: sticky;
    top: var(--sticky-top-right);
    bottom: 0;
    color: var(--card-color);
  }

  .right .may-know {
    margin-top: 1rem;
  }
  .right .may-know h4 {
    color: var(--color-gray);
    margin: 1rem 0;
  }
  .right .request {
    background: var(--post-card-color);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-bottom: 0.7rem;
  }

  .right .request .info {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .right .request .action {
    display: flex;
    gap: 1rem;
  }
`;

export default Wrapper;
