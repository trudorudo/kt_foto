import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../assets/photos"

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="mt-14 h-screen bg-black ">
      <div className="bg-black text-white pl-6 md:pl-10 py-3 space-grotesk-style mb-4">
        Just an attempt to show the beauty I see...
      </div >
      <div className="pb-16 bg-black md:px-6">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
            {/* Inline styles */}
            <style jsx>{`
        .react-images__view-image {
          margin: 0 auto; /* Center the image horizontally */
        }
      `}</style>
       </div>
    </div>
  );
}

export default PhotoGallery