import React from 'react'
import { useLoaderData } from 'react-router';
import Card from '../../Components/Card/Card';

const Services = () => {
   const rawdata = useLoaderData();
  return (
    <div>

       <main className="care py-15 flex flex-col w-[92%] mx-auto ">
        <h2 className="text-secondary text-xl md:text-3xl font-bold text-center pb-5">Popular Winter Care Services
        </h2>
      
      <div className="w-full mycard px-0 grid grid-cols-1 md:grid-cols-4 gap-5  mx-auto place-items-center">
        {
            
        rawdata.map((singlecard)=>(

      <Card key={singlecard.serviceId} singlecard={singlecard}></Card>
        ))
        
        }

           
          
      </div>

     </main>

      
    </div>
  )
}

export default Services
