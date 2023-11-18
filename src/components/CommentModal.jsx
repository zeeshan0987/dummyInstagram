import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

// eslint-disable-next-line react/prop-types
export default function CommentModal({ close }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        close();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onkeydown);
    };
  });
  const { comment } = useContext(AppContext);
  return (
    <div>
      <div className="modalback">
        <div className="modalBody">
          <div className="modalcontant">
            <div className="modalheader">
              <span>Comments</span>
              <span onClick={close}>X</span>
            </div>
            <div>
              {comment.map((item) => (
                <div className="modal" key={item.id}>
                  <img
                    src={item.owner.picture}
                    width={"32px"}
                    headers={"32px"}
                    className="card-img"
                    alt=""
                  />
                  <span>
                    {item.owner.firstName} {item.owner.firstName}
                  </span>

                  <span>{`"${item.message}"`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
