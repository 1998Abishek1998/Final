import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"


export const BigSidebar = () => {
  return (
    <Wrapper>
    
          {/* -------------------------------------------left-------------------------------- */}
        <div className="left">
           
          <NavLinks  />
        </div>
      
    </Wrapper>
  );
}

export default BigSidebar
