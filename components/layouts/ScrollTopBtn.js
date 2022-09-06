import React from "react";
import { FiChevronUp } from "react-icons/fi";
import $ from "jquery";




export default function ScrollTopBtn() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      $(window).on("scroll", function () {
        //back to top button control
        if ($(window).scrollTop() > 300) {
          $("#back-to-top").addClass("back-btn-shown");
        } else {
          $("#back-to-top").removeClass("back-btn-shown");
        }
      });
    }

    /* ======= Back to Top Button and Navbar Scrolling control ======= */
    $(document).on("click", "#back-to-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  }, []);

  return (
    <div id="back-to-top">
      <FiChevronUp />
    </div>
  );
}
