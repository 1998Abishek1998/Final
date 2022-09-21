import { Navbar, BigSidebar, Recommendation } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
const SharedLayout = () => {

  const { user, getSingleCompany} = useAppContext()

  useEffect(()=>{
    if(user){
      getSingleCompany(user.companyId)
    }
  },[user])

  return (
    <Wrapper>
      <section>
        <div className="nav-container" >
          <Navbar />
        </div>

        {/* ----------------------------- MAIN ---------------------------*/}

        <main className="dashboard">
          <div className="container">
            <BigSidebar />
            <Outlet />
            <Recommendation />
          </div>
        </main>
        <div className="glassbg"></div>
      </section>
    </Wrapper>
  );
};

export default SharedLayout;
