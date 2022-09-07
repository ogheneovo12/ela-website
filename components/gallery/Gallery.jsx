import SectionsTitle from "components/common/SectionsTitle";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import sectiondata from "store/store";
import { BnbGallery } from "./BnbGallery";

function Gallery({ len }) {
  return (
    <div className="gallery_wrapper">
      <div className="container">
        <SectionsTitle title="ELA'S Gallery" subtitle="Moments We Captured" />
        <BnbGallery
          photos={
            len
              ? sectiondata.galleryData?.slice(0, len)
              : sectiondata.galleryData
          }
        />
        <Link to="/gallery" className="theme-button">
          View More <FiChevronRight className="icon" />
        </Link>
      </div>
    </div>
  );
}

Gallery.propTypes = {};

export default Gallery;
