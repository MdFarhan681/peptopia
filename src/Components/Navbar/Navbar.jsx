import React, { use, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import logo from "../../assets/logo.png"
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import 'animate.css';


const Navbar = () => {
     const [loading, setloading] = useState(false);
        const navigate =useNavigate();

        const {user,logOut}=use(AuthContext);
  const defaultPhoto = "https://i.ibb.co/7dLrnrMw/mann.jpg"; 

 const handleNav=()=>{
 setloading(true);
      setTimeout(()=>{
        setloading(false)
        navigate(path)
      },300)
 }

 const handleLogOut=()=>{
  logOut().then(()=>{
toast.success("Logged Out Successfully")
  }).catch(()=>{
    toast.error("Failed to log out")
  })
 }




  
   const link=(<>

   <NavLink onClick={()=> handleNav()} className="px-3 font-semibold" to="/">Home</NavLink>
   <NavLink onClick={()=> handleNav()}  className="px-3 font-semibold" to="/services">Services</NavLink>
   <NavLink onClick={()=> handleNav()} className="px-3 font-semibold " to="/Profile">My profile</NavLink>

   
   
   
   </>)

    
  return (

<>

 {
      loading && (
        <div className="fixed inset-0 z-10  flex items-center justify-center font-bold text-4xl  ">

        <span className="loading loading-spinner text-error loading-8xl w-10 h-10"></span>
        </div>
      )
    }

    <div className="navbar bg-base-100 shadow-sm w-full px-[7%] relative z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
       {link}
      </ul>
    </div>
    <div className="logo animate__animated animate__rubberBand flex btn btn-ghost p-1 h-fit">
         <img className='w-12 h-10 rounded-xl ' src={logo} alt="" />
    <a className=" text-xl text-primary">Peptopia</a>
    

    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-2">
      {link}
    </ul>
  </div>

  
  <div className="navbar-end">
  {
      user ?(
        <>
        <Link to='/Profile'className="tooltip tooltip-bottom tooltip-primary" data-tip={user.displayName}> <img  src={user.photoURL || defaultPhoto }  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = defaultPhoto; 
  }}className='w-12 h-12 mx-2 rounded-full border border-blue-300
     p-1 hover:'alt="" /></Link>

          <button onClick={handleLogOut} className="btn bg-primary rounded-sm ">LogOut</button>

        
        
        </>
      





      ):(<Link to="/auth/login" className="btn bg-primary rounded-sm">Login</Link>)
    }
    
  </div>
</div>





</>


    
  )
}

export default Navbar
