import { Navbar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayoutv2";
import { Outlet } from "react-router-dom";
const SharedLayoutv2 = () => {
  return (
    <Wrapper>
      <section>
        <div className="nav-container">
          <Navbar />
        </div>

        {/* ----------------------------- MAIN ---------------------------*/}

        <main className="dashboardv">
          <div className="containerv">
            <BigSidebar />
            <Outlet />
          </div>
        </main>
        <div className="glassbgv2"></div>
      </section>
    </Wrapper>
  );
};

export default SharedLayoutv2;
