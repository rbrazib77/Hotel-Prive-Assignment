import React from 'react'
import Description from '../Description'
import Check from '../Check'
import RoomFacilitie from '../RoomFacilitie'
import FloorPlan from '../FloorPlan'
import PhotoGallery from '../PhotoGallery'
import Availability from '../Availability'
import ReservationForm from '../ReservationForm'
import Review from '../Review'
import AddReview from '../AddReview'
import Rates from '../Rates'

const SingleRoomBannerContent = () => {
  return (
    <div>
        <div className='max-w-container m-auto'>
           <div className='md:flex gap-x-8'>
          <div className='md:w-[70%] w-full '>
             <Description/>
             <RoomFacilitie/>
             <FloorPlan/>
             <PhotoGallery/>
             <Rates/>
             <Availability/>
             <ReservationForm/>
             <Review/>
             <AddReview/>
             </div>
          <div className='w-[30% ]'>
            <Check/>
          </div>
           </div>
        </div>
    </div>
  )
}

export default SingleRoomBannerContent