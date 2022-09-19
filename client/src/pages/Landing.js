import Wrapper from "../assets/wrappers/Landing";
import cocacola from "../assets/images/cocacola.webp"
import ikea from "../assets/images/ikea.webp"
import samsung from "../assets/images/samsung.webp"
import fourf from "../assets/images/4f.webp"
import barcode from "../assets/images/barcode.webp"
import { FaHeart, FaGrinTongueWink } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Landing = () =>{
    return (
    <Wrapper>
        <section className="one">
        <nav>
          <ul className="d-flex navbar-link">
            <li>
              <Link to="/auth/register">Get Started</Link>
            </li>
            <li className="logo">
              <span className="circle-border">W</span> <span>WINKLE MEDIA</span>
            </li>
            <li >
              <Link to="/company/register">Register Company</Link>
            </li>
          </ul>
        </nav>
        <div className="linear-background"></div>
        <div className="XL-text">WINKLE MEDIA</div>
        <div className="L-text">WINKLE MEDIA</div>

        <div className="container-center">
          <div className="M-text">Connect to Peers</div>
        </div>

        <div className="text-M">
          <span>
            <FaHeart /> /
            <FaGrinTongueWink /> &nbsp;
          </span>
          Connet to peers
        </div>
          <Link to="/company/register" className="GetStarted">Register Company</Link>
        <div className="featured">FEATURED</div>
      </section>

      <section className="three">
         <span>
            <Link to="/auth/register">Login</Link>
         </span>
        <svg viewBox="0 0 150 150">
          <path 
            id="curve" 
            fill="transparent" 
            
            
            d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
          />
          <text>
            <textPath xlinkHref="#curve" fill="#9b51e0" >
                | VIEW | LIKE | POST |
            </textPath>
          </text>
        </svg>
      </section>

      <section className="four">
        <div className="Patners"></div>
        <div className="line-left"></div>
        <div className="brands  ">
          <img src={samsung} alt="" />
          <img src={cocacola} alt="" />
          <img src={fourf} alt="" />
          <img src={ikea} alt="" />
        </div>
        <div className="line-right"></div>
        <Link to="/auth/register" className="getstarted-btn">Get Started</Link>
      </section>

      

      <section className="seven">
        <video className="footer-bg" autoPlay muted loop>
        </video>

        <div className="linear-gradient"></div>

        <div className="quote">
          <div>"The best thing to hold</div>
          <div>onto in life is each other"</div>

        </div>

      </section>


      <section className="footer">

          <div className="footer-content">
            <ul className="d-flex navbar-link">
              <li className="logo">
                <span className="circle-border">N</span> <span>NOK'S MEDIA</span>
              </li>
              <img src={barcode} alt="" height={'20px'} width={'10px'}/>
              <li>
                <Link to="/auth/register">Get Started</Link>
              </li>
            </ul>
            <ul className="footer-link">
              <li className="footer-title">located</li>
              <li className="footer-text">kathmandu, Nepal</li>
              <li className="footer-title">WhatsApp:</li>
              <li className="footer-text">+977 9860226954</li>
              <li className="footer-title">Mail:</li>
              <li className="footer-text">uzamakiu@gmail.com</li>
            </ul>
          </div>

        <div className="line-right"></div>

        <div className="copyright">
          Copyrights © 2022 Winkle’Media. All rights reserved.
        </div>


      </section>

      

      

    </Wrapper>
    );
};

export default Landing;
