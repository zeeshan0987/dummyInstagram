/* eslint-disable react/prop-types */
import { useState,useContext } from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaSnapchatGhost } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import CommentModal from "./CommentModal";
import AppContext from "../context/AppContext";

const Card = ({ items }) => {
  const [like, setLike] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [comment, setComment] = useState(false);
  const [view, setview] = useState(false);
  const closemodal = () => {
    setview(false);
  };
  const{getComment,message,setMessage,createcomment}=useContext(AppContext);
  const handlicomment=(items)=>{
    setview(!view)
    getComment(items)
  }
  const post=(id)=>{
    
    createcomment(id)
    alert("Comment add for View Click on View all comments")
    setMessage("")
  }
  return (
    <>
      <div id="body">
        <div className="card-body">
          <div className="card-logo">
            <div className="head">
              <img
                className="card-img"
                src={items.owner.picture}
                alt=""
                width={"32px"}
                headers={"32px"}
              />
              <div>
                <p>
                  {items.owner.firstName} {items.owner.lastName}
                </p>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </div>
          <div>
            <img
              className="card"
              src={items.image}
              alt=""
              width={"100%"}
              height={"585px"}
            />
          </div>
          <div className="logo-item">
            <div className="logo-1">
              <FaRegHeart
                className={`${like ? "like" : ""}`}
                onClick={() => setLike(!like)}
              />
              <FaRegComment
                className={`${comment ? "like" : ""}`}
                onClick={() => setComment(!comment)}
              />
              <AiOutlineShareAlt
                className={`${toggle ? "like" : ""}`}
                onClick={() => settoggle(!toggle)}
              />
            </div>
            <div>
              <a href={items.image} target="next" style={{ color: "black" }}>
                <MdOutlineSaveAlt />
              </a>
            </div>
          </div>
          {toggle && (
            <div className="link">
              <a href="https://www.facebook.com/" target="next">
                <RiFacebookCircleFill />
              </a>
              <a href="https://web.whatsapp.com/" target="next">
                <RiWhatsappFill />
              </a>
              <a href="https://www.linkedin.com/" target="next">
                <FaLinkedinIn />
              </a>
              <a href="https://mail.google.com/" target="next">
                <BiLogoGmail />
              </a>
              <a href="https://www.snapchat.com/" target="next">
                <FaSnapchatGhost />
              </a>
            </div>
          )}

          <div>{like ? items.likes + 1 : items.likes}likes</div>
          <div>{items.text}</div>
          <div onClick={()=>handlicomment(items.id)}>View all comments</div>
          {comment && (
            <div className="input">
              <input
                type="text"
                placeholder="Add a comment..."
                width={"100%"}
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <button className="btn" onClick={()=>post(items.id)}>Post</button>
            </div>
          )}

          <div className="line"></div>
        </div>
      </div>
      {view && <CommentModal close={closemodal} />}
      
    </>
  );
};

export default Card;
