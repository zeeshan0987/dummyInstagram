import {useContext} from 'react'
import AppContext from '../context/AppContext'
import instagtamlogo from '../assets/instagram-logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch,IoCreateOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from 'react';
import Modalpost from './Modalpost';

const Navbar = () => {
  const [menu,setMent]=useState(false)
  const{user}=useContext(AppContext);
  const [view, setview] = useState(false);
  const closemodal = () => {
    setview(false);
  };
  return (
    <>
    <header >
        <nav className='nav'>
            <div>
                <img src={instagtamlogo} alt="" width={200} />
            </div>
            <ul className='navbar'>
              <li><span><IoHomeOutline /></span><span>Home</span></li>
              <li><span><IoSearch /></span><span>Search</span></li>
              <li><span><LuMessageCircle /></span><span>Message</span></li>
              <li><span><FaRegHeart /></span><span>Notifications</span></li>
              <li onClick={()=>setview(!view)}><span><IoCreateOutline /></span><span>Create</span></li>
            </ul>
            <div className='menu'>
              <FaAlignJustify  onClick={()=>setMent(!menu)}/>
            </div>
            <div className='pro'>
              <img src={user.picture} width={"32px"}headers={"32px"}className='card-img' alt="" />
              <span>{user.firstName} {user.lastName}</span>
            </div>
           
        </nav>
        {menu &&<>
            <ul className='navbar1'>
              <li><span><IoHomeOutline /></span><span>Home</span></li>
              <li><span><IoSearch /></span><span>Search</span></li>
              <li><span><LuMessageCircle /></span><span>Message</span></li>
              <li><span><FaRegHeart /></span><span>Notifications</span></li>
              <li onClick={()=>setview(!view)}><span><IoCreateOutline /></span><span>Create</span></li>
            </ul>
            <div className='pro1'>
              <img src={user.picture} width={"32px"}headers={"32px"}className='card-img' alt="" />
              <span>{user.firstName} {user.lastName}</span>
            </div>
        </>
            }
    </header>
    {view &&<Modalpost close={closemodal}/>}
    </>
  )
}

export default Navbar
