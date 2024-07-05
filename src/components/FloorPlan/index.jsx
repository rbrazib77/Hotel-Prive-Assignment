import React from 'react'
import plan from '../../assets/images/plan.png'
const FloorPlan = () => {
  return (
    <div className=''>
         <h3 className="font-anglecia text-2xl leading-8 font-normal pb-6">Floor Plan</h3>
        <picture>
            <img src={plan} alt=""  />
        </picture>
    </div>
  )
}

export default FloorPlan