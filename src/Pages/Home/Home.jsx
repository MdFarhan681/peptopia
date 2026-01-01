import React from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router";
import Card from "../../Components/Card/Card";
import WinterCareTips from "../../Components/Tips/Tips";
import ExpertVets from "../../Components/Expert/Expert";
import Review from "../../Components/Review/Review";


const Home = () => {
  const rawdata = useLoaderData();

  return (
    <div className="py-10 px-[7%]">
      <Slider></Slider>
{/* 
      <main className="care py-15 flex flex-col ">
        <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">Popular Winter Care Services
        </h2>

      <div className="w-full mycard px-0 grid grid-cols-1 md:grid-cols-4 gap-5  mx-auto place-items-center">
        {
            
        rawdata.map((singlecard)=>(

      <Card key={singlecard.serviceId} singlecard={singlecard}></Card>
        ))
        
        }

           
          
      </div>

      <div className="tips">
        <WinterCareTips></WinterCareTips>
      </div>
      <div className="expert">
        <ExpertVets></ExpertVets>
      </div>

       <div className="review">
        <Review></Review>
  
      </div>

     
      </main> */}

    </div>
  );
};

export default Home;
