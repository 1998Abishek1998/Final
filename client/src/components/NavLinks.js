import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/wrappers/Navlinks";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { BiUser } from "react-icons/bi";

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <Link to={`/profile/${user._id}`} className="profile">
        <div>
          <img src={user.profilePicture} alt="" className="profile-photo" />
        </div>
        <div className="handle">
          <h4>{user.name}</h4>
          <p className="text-muted">@{user?.username}</p>
        </div>
      </Link>

      <div className="sidebar">
        {links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="icon">{icon}</span>
              <h3>{text}</h3>
            </NavLink>
          );
        })}
        {
          user.role === 2 ? <>
            <NavLink
              to={`/user/create/employee/${user._id}`}
              key={'emp-123'}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="icon"><BiUser/></span>
              <h3>Create Employee</h3>
            </NavLink>
          </> : <></>
        }
      </div>
    </Wrapper>
  );
};

export default NavLinks;
