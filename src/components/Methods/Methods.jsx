import React, { useState } from 'react'

const Methods = () => {

    const [country, setcountry] = useState('');
    const [city, setcity] = useState('')

    const countriesdata=  [
        {
          country: "USA",
          cities: ["New York", "Los Angeles", "Chicago"],
        },
        {
          country: "India",
          cities: ["Mumbai", "Delhi", "Bangalore"],
        },
        {
          country: "Canada",
          cities: ["Toronto", "Vancouver", "Montreal"],
        },
      ];

  const contrieSelect=(e)=>{
    const contri=e.target.value;
    setcountry(contri);
    
    const filterdata =  countriesdata.find((item )=>item.country === contri);
    console.log(filterdata.cities,'filterd data')

    setcity(filterdata &&filterdata? filterdata.cities : []);
  }
  return (
    <div className='p-5'>
        <div className="w-full h-full bg-violet-400 rounded-lg p-5">
            <select className='p-2 m-2' value={country} onChange={(e)=>contrieSelect(e)}>
                <option value="" disabled>Select country</option>
                {countriesdata?.map((item ,index)=><option key={index} >{item.country}</option>)}
            </select>

            {/* map city  */}
            {city&& <select className='m-2 p-2'>
                <option value="" disabled>Select city</option>
                {city&&city?.map((item ,index)=><option key={index} >{item}</option>)}
            </select>}
           
        </div>

    </div>
  )
}

export default Methods