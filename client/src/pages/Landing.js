import Wrapper from "../assets/wrappers/Landing";
import Video from "../assets/videos/LDRV2.mp4";

import miles from "../assets/images/miles.jpg"
import wolverine from "../assets/images/wolverine0.jpg"
import ironfist from "../assets/images/ironfist.jpg"
import scarlet from "../assets/images/scarlet.jpg"
import hulk from "../assets/images/hulk.jpg"
import deadpool from "../assets/images/deadpool.png"
import venom from "../assets/images/venom.jpg"
import thor from "../assets/images/thor.jpg"


import cocacola from "../assets/images/cocacola.webp"
import ikea from "../assets/images/ikea.webp"
import samsung from "../assets/images/samsung.webp"
import fourf from "../assets/images/4f.webp"


import jurrasic from "../assets/images/dino1.jpg"
import avatar from "../assets/images/avatar0.jpg"


import barcode from "../assets/images/barcode.webp"

//import handvideo from "../assets/videos/hand_neon.mp4"






import { SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn, FaHeart, FaGrinTongueWink } from "react-icons/fa";
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
        {/* <video className="video-bg" autoPlay muted>
          <source type="video/mp4" src={Video} />
        </video> */}
        <video className="video-bg-1" autoPlay loop muted={false}>
          <source type="video/mp4" src={Video} />
        </video>
        <div className="linear-background"></div>
        <div className="XL-text">Social Network</div>
        <div className="L-text">Social Network</div>

        <div className="container-center">
          <div className="M-text">Interactive Design</div>
          
          <div className="social-icons">
            <span>
              <SiInstagram className="fab" />
            </span>
            <span>
              <FaLinkedinIn className="fab" />
            </span>
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
        </div>

        <div className="text-M">
          <span>
            <FaHeart /> /
            <FaGrinTongueWink /> &nbsp;
          </span>
          = World
        </div>
          <Link to="/company/register" className="GetStarted">Register Company</Link>
        <div className="featured">FEATURED</div>
      </section>


      <section className="two">
        <img src={miles} alt="" />
        <img src={ironfist} alt="" />
        <img src={scarlet} alt="" />
        <img src={wolverine} alt="" />
        <img src={hulk} alt="" />
        <img src={deadpool} alt="" />
        <img src={venom} alt="" />
        <img src={thor} alt="" />
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

        <span className="million">*Along with 1 million users</span>

        <Link to="/auth/register" className="getstarted-btn">Get Started</Link>
      </section>


      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span> 
          <div className="Why"></div>

        </div>
          <p className="five-p">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur fugiat illo eos nemo velit porro accusantium molestias voluptatibus corporis quam ullam animi rerum adipisci tempora, ipsam ut nisi aliquid temporibus inventore ex fugit quibusdam provident. Dolores numquam doloribus possimus voluptas saepe placeat eos?</p>
<p className="five-p">We often help start ups to get their first site live! Don’t be shy send a question!</p>

<p className="five-p">Check out our services.</p>

<img src={jurrasic} className="bigimg-left" alt="" />
<img src={avatar} className="bigimg-right" alt="" />


      </section>

      <section className="six">
        <img src={barcode} alt="" className="barcode"/>
        <div className="about"></div>

        <div className="grid-3">
          <div className="bnumber">8</div>
          <div className="bnumber">100+</div>
          <div className="bnumber">1,000+</div>
          <div className="mtext">Years of <br /> Excellence</div>
          <div className="mtext">Daily <br /> Newusers</div>
          <div className="mtext">Weekly <br /> Posts</div>



        </div>

        <p className="six-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ratione ad voluptatum. Facilis veritatis dolorem qui expedita dignissimos similique aperiam, ab dolores?</p>
        <p className="six-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolor. Quam sed, numquam ducimus nesciunt animi adipisci facilis veritatis cum! Ullam, maxime.</p>
      </section>

      <section className="seven">
        <video className="footer-bg" autoPlay muted loop>
        {/* <source type="video/mp4" src={handvideo} /> */} 
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
              <li>Services</li>
              <li>
                <Link to="/auth/register">Get Started</Link>
              </li>
            
            </ul>
            <div className="footer-icon">
              <span>
                <SiInstagram className="fab" />
              </span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
            
              <span>
                <SiBehance className="fab" />
              </span>
            </div>
            <ul className="footer-link">
              <li className="footer-title">located</li>
              <li className="footer-text">kathmandu, Nepal</li>
              <li className="footer-title">WhatsApp:</li>
              <li className="footer-text">+977 9823447627</li>
              <li className="footer-title">Mail:</li>
              <li className="footer-text">Nischal@gmail.com</li>
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
