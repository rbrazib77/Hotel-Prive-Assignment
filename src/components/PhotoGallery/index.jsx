import React from "react";
import Slider from "react-slick";
import galOne from "../../assets/images/spaOne.jpg";
import galTwo from "../../assets/images/spaOne.jpg";
import galThree from "../../assets/images/spaOne.jpg";
import galFour from "../../assets/images/spaOne.jpg";
const PhotoGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="photo_gallery" className="pb-10 px-6 md:px-0">
      <h3 className="font-anglecia font-semibold text-2xl text-dark pb-6">
        Photo Gallery
      </h3>
      <div className="gallery_slider">
        <Slider {...settings}>
          <picture>
            <img className="w-full block" src={galOne} alt={galOne} />
          </picture>
          <picture>
            <img className="w-full block" src={galTwo} alt={galTwo} />
          </picture>
          <picture>
            <img className="w-full block" src={galThree} alt={galThree} />
          </picture>
          <picture>
            <img className="w-full block" src={galFour} alt={galFour} />
          </picture>
          <picture>
            <img className="w-full block" src={galTwo} alt="" />
          </picture>
        </Slider>
      </div>
      <h3 className="font-anglecia font-semibold text-2xl text-dark py-6">
        Terms and Conditions
      </h3>
      <p className="font-roboto text-lg font-normal text-black">
        Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
        Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec
        sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor,
        dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi
        et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu
        lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
        neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
        Aenean nec eros.
      </p>
    </section>
  );
};

export default PhotoGallery;
