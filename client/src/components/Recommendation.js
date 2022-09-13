import Wrapper from "../assets/wrappers/Recommend";
import irene from "../assets/images/irene.jpg";

const Recommendation = () => {
  return (
    <Wrapper>
      <div className="right">
        <div className="may-know">
          <h4>Recommendation</h4>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={irene} alt="" />
              </div>

              <div>
                <h5>Hajia Bintu</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>

            <div className="action">
              <button className="btn2 btn2-primary">Follow</button>
              <button className="btn2 ">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recommendation;
