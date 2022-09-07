import React from "react";
import CtaForm from "components/other/CtaForm";
import Breadcrumb from "components/common/Breadcrumb";
import Gallery from "components/gallery/Gallery";
import Navbar from "components/common/Navbar";
import Footer from "components/other/Footer";

function GalleryPage(props) {
  return (
    <>
      {/* Header */}
      <header className="header-area">
        <Navbar />
      </header>

      {/* Breadcrumb */}
      <Breadcrumb title="Gallery Page" />

      <Gallery />

      <div className="form-white-bg">
        <CtaForm />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default GalleryPage;
