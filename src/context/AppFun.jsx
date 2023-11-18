/* eslint-disable react/prop-types */
// import React from 'react'
import AppContext from "./AppContext";
import { useState } from "react";

const AppFun = (props) => {
  const [postdeta, setPostdeta] = useState([]);
  const [user, setUser] = useState({});
  const[comment,setComment]=useState([]);
  const [message,setMessage]=useState('')
  const api_id = "655777a942e9c897b8dd2b63";

  const getPostDeta = async () => {
    const res = await fetch("https://dummyapi.io/data/v1/post/", {
      headers: {
        "app-id": api_id,
      },
    });
    try {
      const post = await res.json();
      setPostdeta(post.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserdeta = async () => {
    const res = await fetch(
      "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109cb",
      {
        headers: {
          "app-id": api_id,
        },
      }
    );
    try {
      const post = await res.json();
      setUser(post);
    } catch (error) {
      console.log(error);
    }
  };
  const getComment = async (post_id)=>{
    const res = await fetch(
      `https://dummyapi.io/data/v1/post/${post_id}/comment`,
      {
        headers: {
          "app-id": api_id,
        },
      }
    );
    try {
      const post = await res.json();
      setComment(post.data);
      console.log(post.data)
    } catch (error) {
      console.log(error);
    }
  }
  const createcomment = async (post_id) => {
    const res =await fetch("https://dummyapi.io/data/v1/comment/create", {
      method: "POST",
      body: JSON.stringify({
        message:message,
        owner: user.id,
        post:post_id ,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": api_id,
      },
    });
    try {
      const post = await res.json();
      console.log(post)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ api_id, postdeta, getPostDeta, getUserdeta, user ,getComment,comment,setMessage,message,createcomment}}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppFun;
