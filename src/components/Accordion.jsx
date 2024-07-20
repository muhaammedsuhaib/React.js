import React, { useState } from 'react'
import  './Accordion.css'
const Accordion = () => {
   document.title='Accordion'

   const data = [
    {
      heading: 'Document 1',
      id: 1,
      details: 'This is the first document. It contains a comprehensive overview of the initial project requirements and specifications. Please review all sections thoroughly.',
    },
    {
      heading: 'Document 2',
      id: 2,
      details: 'This is the second document. It includes detailed design diagrams and architecture blueprints. Ensure you understand the proposed design before proceeding.',
    },
    {
      heading: 'Document 3',
      id: 3,
      details: 'This is the third document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
    {
      heading: 'Document 4',
      id: 4,
      details: 'This is the fourth document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
    {
      heading: 'Document 5',
      id: 5,
      details: 'This is the five document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
    {
      heading: 'Document 6',
      id: 6,
      details: 'This is the six document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
    {
      heading: 'Document 7',
      id: 7,
      details: 'This is the seven document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
    {
      heading: 'Document 8',
      id: 8,
      details: 'This is the eight document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success.',
    },
  ];


   const [dataid ,setdataId]=useState(null);

  const showData=(id)=>{
   setdataId(dataid=== id ?null: id);
  }
  return (
    <>
<div className='container'>

<div style={{padding:'60px'}}>
    {data.map((item)=>(
        <div key={item.id}>
         <div className='data' onClick={()=>showData(item.id)} > <h1> {item.heading} <span style={{fontSize:'40px'}}>{dataid === item.id?'-':'+'}</span> </h1></div>
         {dataid === item.id ?<div className="data-show"><p>{item.details}</p></div>:null}
         
        </div>
    ))}
</div>

</div>
    </>
  )
}

export default Accordion