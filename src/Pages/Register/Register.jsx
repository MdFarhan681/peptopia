import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth, AuthContext, googleProvider } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createuser, setuser,googleSignIn, updateUser } = use(AuthContext);

  const handleSub = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(email,photo,name)

    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValid) {
      toast.error(
        "Password must include uppercase,lowercase and at least 6 characters"
      );
      return;
    }

    createuser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
           setuser(user)

       
        navigate(`${location.state ? location.state : "/"}`);
        form.reset();
        toast.success("Signup Successfull");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.Please login");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email");
        } else {
          toast.error("Signup Failed.Please try again.");
        }
      });




  };


  const handleGoogle =()=>{
    googleSignIn()
     .then(() => {
      toast.success("Google Sign-In Successful");
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(() => {
      toast.error("Google Sign-In Failed. Try again");
    });
  }





  return (
    <div>
      <div className="flex justify-center items-center min-h-screen  ">
        <div className="card bg-base-100 w-full md:w-100 shrink-0 shadow-2xl   ">
          <h1 className="text-3xl pt-5 font-bold text-secondary text-center">
            Register Your Account
          </h1>
          <div className="card-body w-full">
            <form onSubmit={handleSub} className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
              
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder=" Email"
          
              />

              {/* Photo */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Upload your photo"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder=" Password"
              
              />

              <button type="submit" className="btn bg-primary mt-4">
                Signup{" "}
              </button>

              <p className="font-semibold text-center pt-3">
                Already have an account?
                <Link to="/auth/login" className="text-red-600">
                  {" "}
                  Login
                </Link>
              </p>

              <div  className="google">
               <button onClick={handleGoogle} type ="button"className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Signup with Google
</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
