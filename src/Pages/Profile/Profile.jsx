import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);
const defaultPhoto = "https://i.ibb.co/7dLrnrMw/mann.jpg";


  return (
    <div>
      {user ? (
        <div className="w-full mx-auto pt-15 flex justify-center items-center py-10 px-[7%]">

          <div className=" card shadow-lg w-full md:w-80 h-fit ">
            <figure>
              <img
                className="rounded-sm overflow-hidden object-cover w-full "
                src={user.photoURL || defaultPhoto}

                 onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src =defaultPhoto  ; // fallback
  }}

                alt="apps"
              />
            </figure>
            <div className=" flex flex-col  w-full  text-start px-5 py-2">
              <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2">
                <span className="font-bold"> Name:</span> {user.displayName}
              </h2>
              <p className="pb-2">
                {" "}
                <span className="font-bold "> Email:</span> {user.email}
              </p>

              <Link
                to={`/update`}
                className="btn bg-primary rounded-sm w-full my-2 "
              >
                Profile Update
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="pro">
          <div className="w-full mx-auto pt-15 flex justify-center items-center py-10 px-[7%]">

          <div className=" card shadow-lg w-full md:w-80 h-fit ">
           
            <div className=" flex flex-col  w-full  text-start px-5 py-2">
              <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2 text-center">
                You don't have any Profile
              </h2>
             

              <Link
                to={`/auth/login`}
                className="btn bg-primary rounded-sm w-full my-2 "
              >
                 Create Profile
              </Link>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
