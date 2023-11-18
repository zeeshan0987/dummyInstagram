import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import AppFun from './context/AppFun'



function App() {


  return (
    <>
    <AppFun>
      <Navbar/>
      <Post/>
    </AppFun>
  
    </>
  )
}

export default App
