import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useLoaderData, useParams, useSearchParams } from 'react-router';

const ServiceDetails = () => {
  const { serviceId } = useParams();
const formRef = useRef(); 
  const data = useLoaderData();
  

  const handleSub=(e)=>{
    e.preventDefault()
    const form =formRef.current
const myname =form.name.value
const email =form.email.value
    if(myname && email){
      toast.success("Successfully Booked.")

    }else{
toast.error("Failed !!!")
    }
    form.reset()

   

    
  }



  const singleCard = data.find((pet) => pet.serviceId === parseInt(serviceId));
  const {
    image,
   serviceName,
    providerName,
    providerEmail,
    price,
    slotsAvailable,
    description,
    rating,
   
    category
   
  } = singleCard;

  return (
   <div className="details w-full py-10 md:px-15 px-[7%]">
      <div className="pb-3 flex flex-col md:flex-row ">
        <img className="w-65" src={image} alt="" />

        <div className="topCont pl-3 w-full ">

          <div className="contHead  ">
            <h2 className="font-bold text-3xl text-[#001931]">{serviceName}</h2>
            <p className="text-secondary pt-1 ">
              Provided by{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text ">
                {providerName}
              </span>

            </p>
            <p className="text-secondary pt-1 ">
             Email:{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#632EE3]  to-[#a88dce] bg-clip-text ">
                {providerEmail}
              </span>

            </p>
            <p className="text-secondary pt-1 ">
            Category:{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#632EE3]  to-[#a88dce] bg-clip-text ">
                {category}
              </span>

            </p>
           

            <hr className="text-gray-300 w-full " />
          </div>



          <div className="topicons flex justify-between w-full md:w-100 pt-3 ">

            <div className="download flex flex-col">
             
              <p className="text-gray-400 text-sm py-1">price</p>
              <p className="text-[#001931] text-3xl font-bold">{price}</p>
            </div>
            <div className="avgRating flex flex-col justify-center items-center ">
             
              <p className="text-gray-400 text-sm py-1">Available slots</p>
              <p className="text-[#001931] text-3xl font-bold">{slotsAvailable}</p>
            </div>
            <div className="avgRating flex flex-col ">
              <img className="w-7" src={rating} alt="" />
              <p className="text-gray-400 text-sm py-1">Ratings</p>
              <p className="text-[#001931] text-3xl font-bold">{rating}</p>
            </div>
           
           
          </div>

       
        </div>

      </div>

      <hr className="text-gray-300 w-full " />

      <div className="des w-full h-fit my-10">
        <h1 className="font-bold text-xl text-[#001931] py-3">Description</h1>
        <p className="text-[#627382] text-justify py-2">{description}This service provides custom winter coat fittings and cozy outfit options tailored to your pet’s size and comfort. Expert staff ensure the perfect fit using soft, insulated materials to keep your furry friend warm during chilly walks. From stylish jackets to weather-resistant gear, every piece is designed for maximum comfort and mobility. Protect your pet from harsh cold, wind, and moisture while ensuring they look adorable and stay safe throughout the winter season.</p>
       
      </div>


      {/* form */}
      <div className="hero bg-base-200">
  <div className="hero-content flex flex-col">
    <div className="text-center ">
      <h1 className="text-3xl font-bold text-secondary">Book now!</h1>
    
    </div>
    <div className="card bg-base-100 w-full md:w-100 shrink-0 shadow-2xl">
      <div className="card-body">

        <form ref={formRef} onSubmit={handleSub}className="fieldset">
          <label className="label">Name</label>
          <input type="name" name="name" className="input w-full" placeholder="Enter your name"
          />
           <label className="label">Email</label>
          <input type="email"  name="email"className="input w-full" placeholder=" Email"
           />
          
          <button type='submit' className="btn bg-primary mt-4">Book Now</button>
        </form>
      </div>
    </div>
  </div>
</div>





    </div>
  

     
 
  );
};

export default ServiceDetails
