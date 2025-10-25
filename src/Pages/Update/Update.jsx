import React, { use } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Update = () => {

const { createuser, setuser, updateUser,user } = use(AuthContext);

    const handleupdate=(e)=>{
         e.preventDefault();
    const form = e.target;
    const name = form.name.value;
   const photo = form.photo.value;




         updateUser({ displayName: name, photoURL: photo }).then(() =>{

          setuser({ ...user, displayName: name, photoURL: photo })
           form.reset();
        toast.success("Successfully Update");
         }


        ).catch((error)=>{
          setuser(user)
        })

       


    }
  return (
    <div>
          <div className="flex justify-center items-center min-h-screen w-full px-[7%]  ">


     
    <div className="card bg-base-100 w-[92%] md:w-100 shrink-0 shadow-2xl   ">

         <h1 className="text-3xl font-bold text-secondary pt-5 text-center">Update Your Account</h1>
      <div className="card-body w-full">

        <form onSubmit={handleupdate} className="fieldset">
          
          {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
                required
              />
            {/* Photo */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Upload your photo"
              />
          <button type='submit' className="btn bg-primary mt-4">Update</button>

        </form>

      </div>
    </div>


   </div>
      
    </div>
  )
}

export default Update
