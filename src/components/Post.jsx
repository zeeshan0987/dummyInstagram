import {useContext,useEffect} from 'react'
import AppContext from '../context/AppContext'
import Card from './Card';

const Post = () => {
    const {getPostDeta,postdeta,getUserdeta} =useContext(AppContext);
    useEffect(()=>{
        getPostDeta()
        getUserdeta()
    },[])
  return (
    <>
      <div className='post'>
        {postdeta.map((item)=>(
            <Card key={item.id} items={item}/>
            // <li key={item.id}>{item.owner.firstName}</li>
        ))}
      </div>
    </>
  )
}

export default Post
