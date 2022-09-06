import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiPlay } from "react-icons/fi";
import about_video_img from "../../assets/images/img1.jpg";
import history_img from "../../assets/images/img2.jpg";
import Accordions from "components/other/Accordions";
// import ModalVideo from "react-modal-video";

const assoc_p = [
  {
    title: "OUR MISSION",
    content:
      "To enrich lives, promote social equality and advance understanding in the Nigerian Legal System through integrity, service, leadership and diversity.",
  },
  {
    title: "OUR VISSION",
    content:
      "To be a vibrant and socially conscious Association, making a difference while fostering commitment, diversity, fellowship as well as integrity amongst lawyers, professionals and the public.",
  },
  {
    title: "OUR CORE VALUES",
    content: "Excellence • Social Equality • Integrity •	Courage",
  },
];

export default class About1 extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal2 = this.openModal2.bind(this);
  }

  openModal2() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <section className="about-st1-wrapper">
        <div className="container">
          <div className="about-st1-grid">
            <div className="about-left">
              <h1 className="about-left-title">
                Message from the <strong color="#946128">founder.</strong>
              </h1>
              <p className="about-left-desc">
                Law and the practice thereof, is indeed an integral part of our
                society. The law is highly susceptible to periodic amendments as
                the world advances further. It is therefore pertinent to
                continuously improve the knowledge, skills as well as aid in the
                acquisition of globally recognized accreditations to the benefit
                of Nigeria's corporate professionals. In partnership with the
                Nigerian Bar Association, and various other relevant
                institutional bodies, our goal in the ELA is to contribute our
                quota towards the overall amelioration of our society through
                impactful humanitarian activism, unparalleled legal service
                provision as well as heightening the intellectual capacity of
                all fellows, partners and subscribers so as to align with
                international global best practices for professionals. In a bid
                to attain optimum productivity and exposure, it is crucial that
                the nation's legal practitioners and professionals alike be
                granted frequent progressive capacity development and policy
                amelioration programs. These ideals and allied matters form the
                basis upon which the Elite Lawyers Association (ELA) exists and
                operates.
              </p>
              <Link to="/#" className="theme-button">
                Join Now <FiChevronRight className="icon" />
              </Link>
            </div>
            <div className="about-right">
              <img
                className="about-right-img"
                src={about_video_img?.src}
                alt="About Video"
              />
            </div>
          </div>
          <div className="history-area">
            <div className="row">
              <div className="col-8">
                <img
                  className="history_img"
                  src={history_img?.src}
                  alt="History"
                />
              </div>
              <div className="history-details-box">
                <Accordions items={assoc_p} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
