import styled from "styled-components";

const Wrapper = styled.aside`
  .search_result {
    position: absolute;
    top: 80px;
    left: 0;
    border-radius: 10px;

    width: 550px;
    background-color: var(--color-bg);

    & .search-content {
      display: flex;
      margin-block: 5px;
      gap: 4%;
      margin: 10px;
    }

    & > .search-info {
      display: flex;
      flex-direction: column;
      gap: 2%;
    }
  }
`;
export default Wrapper;
