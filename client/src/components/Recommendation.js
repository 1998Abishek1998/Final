import Wrapper from "../assets/wrappers/Recommend";
import companyImg from "../assets/images/companyImg.jpg";
import companySit from '../assets/images/Companysit.jpg'

const Recommendation = () => {
  return (
    <Wrapper>
      <div className="right">
        <img src={companyImg} alt='logo' width={'60'} style={{
          margin: '10px',
          borderRadius: '10px'
        }}/>
        <img src={companySit} alt='logo' width={'60'} style={{
          margin: '10px',
          borderRadius: '10px'
        }}/>
        <span style={{
          margin:'10px',
          color:'purple'
        }}>Connect to Peers</span>
      </div>
    </Wrapper>
  );
};

export default Recommendation;
