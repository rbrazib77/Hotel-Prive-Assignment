import React from "react";
import RelatedRoom from "../components/RelatedRoom";
import SingleBanner from "../components/SingleBanner";
import SingleBannerButtomMenu from "../components/SingleBannerButtomMenu";
import SingleRoomBannerContent from "../components/SingleRoomBannerContent";


const SingleRoom = () => {
  return (
    <>
     <SingleBanner/>
     <SingleBannerButtomMenu/>
     <SingleRoomBannerContent/>
     <RelatedRoom />
    </>
  );
};

export default SingleRoom;
