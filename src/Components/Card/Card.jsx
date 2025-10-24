import React from "react";
import ratings from "../../assets/ratings.png"
import { Link } from "react-router";

const Card = ({ singlecard }) => {
  const { serviceName, rating, image, price,serviceId } = singlecard;
  return (
    <div>
      <div className="w-75 h-fit p-3  card shadow-sm   ">
        <figure>
          <img className="rounded-sm" src={image} alt="apps" />
        </figure>
        <div className=" flex flex-col  w-full  text-start">
          <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2">
            {serviceName}
          </h2>

          <div className=" flex  w-full justify-between ">
            <div className="left flex gap-1  items-center text-left">
              <p className="text-green-500">Price: ${price}</p>
            </div>

            <div className="left flex gap-1 items-center  ">
              <img className="w-4 h-4" src={ratings} alt="" />
              <p className="text-amber-600">{rating}</p>
            </div>

            
          </div>
           <div className="navbar-end w-full py-2">
    <Link to={`/ServiceDetails/${serviceId}`} className="btn bg-primary rounded-sm w-full">View Details</Link>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
