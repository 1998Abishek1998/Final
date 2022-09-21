
//import { ImProfile } from 'react-icons/im'
import {AiOutlineHome } from 'react-icons/ai'
//import {MdOutlineExplore} from 'react-icons/md'

// import {IoBookmarkOutline} from 'react-icons/io5'
import { SiGooglemessages } from 'react-icons/si';

const links = [
  {
    id: 1,
    text: "Home",
    path: "/user",
    icon: <AiOutlineHome />,
  },
  // {
  //   id: 2,
  //   text: "Explore",
  //   path: "/user/Explore",
  //   icon: <MdOutlineExplore />,
  // },
  // {
  //   id: 3,
  //   text: "Bookmarks",
  //   path: "bookmarks",
  //   icon: <IoBookmarkOutline />,
  // },
  // {
  //   id: 4,
  //   text: "Profile",
  //   path: "/profile",
  //   icon: <ImProfile />,
  // },
  {
    id: 5,
    text: "Messages",
    path: "/dashboard",
    icon: <SiGooglemessages/>,
  },
];

export default links