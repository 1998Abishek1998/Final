import Wrapper from "../assets/wrappers/navbar";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import {Searchbar} from "../components"
import { Link } from "react-router-dom";
// import ModalAddPostForm from "./newcomponents/ModalAddPostForm";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  
  const { logoutUser, singleCompany } = useAppContext();
  

  return (
    <>
    <Wrapper>
      <nav>
        <div className="container">
          <h2 className="log">
            <Link to='/user'>
              { singleCompany ? `${singleCompany.CompanyName}` : ' WinkleMedia'}
            </Link>
          </h2>
          <Searchbar/>
          <div className="create">
            <div className="btn-container">
              <button
                className="profile-picture btn-none"
                onClick={() => setShowLogout(!showLogout)}
              >
                <img
                  className="profile-photo"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8361ef54-5fa8-42b0-9e75-01a5034ef26a/de6os69-7c1d25a3-c1c8-4cc5-8419-9d4f32eea6ef.jpg/v1/fit/w_300,h_900,q_70,strp/halloween_icon_wendell_2020_by_ijustwannahavefunn_de6os69-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzgzNjFlZjU0LTVmYTgtNDJiMC05ZTc1LTAxYTUwMzRlZjI2YVwvZGU2b3M2OS03YzFkMjVhMy1jMWM4LTRjYzUtODQxOS05ZDRmMzJlZWE2ZWYuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EMqbhme0Qy7MEUL6XiZ7Eb6D-TYs4rnBLH70CHtF8I4"
                  alt=""
                />
              </button>
              <div
                className={showLogout ? "dropdown show-dropdown" : "dropdown"}
              >
                <button
                  type="button"
                  className="dropdown-btn"
                  onClick={() => logoutUser()}
                >
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
    </>
  );
};

export default Navbar;
