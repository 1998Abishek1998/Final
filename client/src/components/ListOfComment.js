import moment from "moment";
const ListOfComment = ({list}) => {

    return (list.map((item)=>{
        return (
          <div className="AllCommentSection" key={item._id}>
            <img
              src={item.commentedBy.profilePicture}
              alt=""
              className="profile-photo"
            />
            <div className="comment-info">
              <div className="comment-info-content">
                <span className="comment-username">
                  {item.commentedBy.username}
                </span>
                <p className="comment-content">{item.content}</p>
              </div>
              <p className="comment-time">{moment(item.createdAt).fromNow()}</p>
            </div>
          </div>
        );
    }))

}

export default ListOfComment