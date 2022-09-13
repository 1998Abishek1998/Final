import styled from  'styled-components';

const Wrapper = styled.aside`

.comment-container{
    display:flex;
    align-items: center;
    padding: 1% 2%;
    background-color: var(--post-card-color);
    border-radius: 25px;
}

.comment-input{
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 5px;
    color: white;
}

.send-comment-icon{
    font-size: 20px;
    margin-right: 5px;
    cursor:pointer;
}

.react-input-emoji--container{
    background-color: transparent;
    border: none;
}

`;

export default Wrapper;