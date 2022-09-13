import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background-color: black;
  justify-content: center;
  margin: 0;
  padding: 0;
 

  
  
  height: 119vh;


  body{
    background-color: black;
  }

  .formv2{
    background-color: var(--black-900);
    padding: 20%;
  }
  .sidebg{
    position: relative;
  }

  .bglinear{
    position: absolute;
    top: 0;
    height: 100%;
      width: 100%;
      z-index: 2;
     background-image: linear-gradient(
      135deg,
      rgb(1, 3, 0.2) 0%,
      rgb(9, 3, 15, 0.2) 100%
      ) !important;
     
  }

  .bg-video{
    
  
    height: 100%;
    width: 100%;
    top: 0;
   
    object-fit: cover;
  }

  .login-t{
    text-align: start;
  }

  .login-p{
    color: grey;
    text-align: start;
    margin-block: 20px;
  }

  .title{
    font-family: 'Pacifico', cursive; 
    font-size:30px ;
    text-align: center;

    a{
      color: white;
      text-decoration:none ;
    }
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    border-bottom: 5px solid var(--primary-500);
    margin-inline: auto;
    height: max-content;

    
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  @media screen and (max-width:700px ){
      grid-template-columns: repeat(1,1fr);
      justify-content: center;
    .sidebg{
      display: none;
    }
    
  }
`
export default Wrapper
