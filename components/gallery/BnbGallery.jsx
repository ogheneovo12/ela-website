import React, { useCallback, useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import PhotoGrid from "./PhotoGrid";
import 'react-bnb-gallery/dist/style.css'


export const BnbGallery = ({ photos }) => {
  const [galleryStatus, setGalleryStatus] = useState({
    isOpen: false,
    currentPhoto: null,
    index:undefined
  });

  const onPhotoPress = useCallback((photo) => {
    setGalleryStatus({
      isOpen: true,
      currentPhoto: photo,
      index:photo?.number,
    });
  }, []);

  const onGalleryClose = useCallback(() => {
    setGalleryStatus({
      isOpen: false,
      currentPhoto: null,
    });
  }, []);

  const isOpen = galleryStatus.isOpen;

  

  return (
    <div>
      <PhotoGrid photos={photos} onPhotoPress={onPhotoPress} />
      <ReactBnbGallery
        show={isOpen}
        photos={photos}
        onClose={onGalleryClose}
        activePhotoIndex={galleryStatus?.index}
        wrap={false}
        backgroundColor="#000000"
      />
    </div>
  );
};
