import React from "react";
import { v4 } from "uuid";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function PhotoGrid({ photos, onPhotoPress }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {photos?.map((photo) => (
          <img
            key={v4()}
            className="w-full min-h-[300px] object-cover"
            src={photo?.photo}
            alt={photo.caption}
            onClick={() => onPhotoPress(photo)}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

PhotoGrid.propTypes = {};

export default PhotoGrid;
