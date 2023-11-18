/* eslint-disable react/prop-types */
import { useEffect, useState,useContext } from "react";
import AppContext from "../context/AppContext";

export default function Modalpost({ close }) {
  const{getPostDeta}=useContext(AppContext)
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
  const[deta,setDeta]=useState({text:'',image:'',likes:'',tags:'',owner:'60d0fe4f5311236168a109cb'})
  const handlechang = (e) => {
    setDeta((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createpost = async () => {
    const res =await fetch("https://dummyapi.io/data/v1/post/create", {
      method: "POST",
      body: JSON.stringify({
        text:deta.text,
        owner: deta.owner,
        image:deta.image ,
        tags:"Dog",
        likes:deta.likes
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "655777a942e9c897b8dd2b63",
      },
    });
    try {
      const post = await res.json();
      console.log(post)
      getPostDeta()
      setDeta({text:'',image:'',likes:''})
      close()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div  className="modalback">
        <div className="modalBody">
          <div className="modalcontant">
            <div className="modalheader">
              <span>Create new post</span>
              <span onClick={close}>X</span>
            </div>
            <div>
              <div className="input-post">
                <input type="text" placeholder="Start a post" name="text" value={deta.text} onChange={handlechang}/>
                <input type="url" placeholder="image URL" name="image" value={deta.image} onChange={handlechang}/>
                <input type="text" placeholder="Enter Like" name="likes" value={deta.likes} onChange={handlechang}/>
                
              </div>
              <button className="btn" onClick={createpost}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
