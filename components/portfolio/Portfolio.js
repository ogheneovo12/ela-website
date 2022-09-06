import React from "react";
import Isotope from "isotope-layout/js/isotope";
import classNames from "classnames";
import SectionsTitle from "../common/SectionsTitle";
import { Link } from "react-router-dom";
import pt1 from "../../assets/images/img22.jpg"; // 350x256

class Portfolio extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      var iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
      iso.arrange({
        filter: ".marketing",
      });
      iso.arrange({
        filter: ".finance",
      });
      iso.arrange({
        filter: ".consulting",
      });
      iso.arrange({
        filter: ".business",
      });
      iso.arrange({
        filter: "*",
      });
    }
  }
  constructor() {
    super();
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickBusiness = this.handleClickBusiness.bind(this);
    this.handleClickFinance = this.handleClickFinance.bind(this);
    this.handleClickMarketing = this.handleClickMarketing.bind(this);
    this.handleClickConsulting = this.handleClickConsulting.bind(this);
    this.state = {
      isClickedAll: true,
      isClickedBusiness: false,
      isClickedFinance: false,
      isClickedMarketing: false,
      isClickedConsulting: false,
    };
  }
  handleClickAll(e) {
    this.setState({
      isClickedAll: true,
      isClickedBusiness: false,
      isClickedConsulting: false,
      isClickedFinance: false,
      isClickedMarketing: false,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    this.iso.arrange({ filter: "*" });
  }
  handleClickBusiness(e) {
    this.setState({
      isClickedAll: false,
      isClickedBusiness: true,
      isClickedConsulting: false,
      isClickedFinance: false,
      isClickedMarketing: false,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    this.iso.arrange({ filter: ".business" });
  }
  handleClickFinance(e) {
    this.setState({
      isClickedAll: false,
      isClickedBusiness: false,
      isClickedConsulting: false,
      isClickedMarketing: false,
      isClickedFinance: true,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    this.iso.arrange({ filter: ".finance" });
  }
  handleClickConsulting(e) {
    this.setState({
      isClickedAll: false,
      isClickedBusiness: false,
      isClickedFinance: false,
      isClickedMarketing: false,
      isClickedConsulting: true,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    this.iso.arrange({ filter: ".consulting" });
  }
  handleClickMarketing(e) {
    this.setState({
      isClickedAll: false,
      isClickedBusiness: false,
      isClickedFinance: false,
      isClickedMarketing: true,
      isClickedConsulting: false,
    });
    if (this.iso === undefined)
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    this.iso.arrange({ filter: ".marketing" });
  }
  render() {
    return (
      <>
        <div className="portfolio-grid-wrapper">
          <div className="container">
            <div className="portfolio-grid-top text-center">
              <SectionsTitle
                title="We've Done Lot's of Work, Let's Check Some From here."
                subtitle="Get To Know"
              />
              <div className="filters">
                <button
                  onClick={this.handleClickAll}
                  className={
                    this.state.isClickedAll ? classNames("all active") : "all "
                  }
                >
                  All
                </button>
                <button
                  onClick={this.handleClickBusiness}
                  className={
                    this.state.isClickedBusiness
                      ? classNames("business active")
                      : "business "
                  }
                >
                  Business
                </button>
                <button
                  onClick={this.handleClickConsulting}
                  className={
                    this.state.isClickedConsulting
                      ? classNames("consulting active")
                      : "consulting "
                  }
                >
                  Consulting
                </button>
                <button
                  onClick={this.handleClickFinance}
                  className={
                    this.state.isClickedFinance
                      ? classNames("finance active")
                      : "finance "
                  }
                >
                  Finance
                </button>
                <button
                  onClick={this.handleClickMarketing}
                  className={
                    this.state.isClickedMarketing
                      ? classNames("Marketing active")
                      : "Marketing "
                  }
                >
                  Marketing
                </button>
              </div>
            </div>
            <div className="grid">
              <div className="grid-item portfolio-item consulting business">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Business Management</h4>
                    <span>Business</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item marketing business">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Digital Analysis</h4>
                    <span>Business</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item finance consulting">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Fund Management</h4>
                    <span>Finance</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item consulting finance">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Data Analytics</h4>
                    <span>Marketing</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item finance">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Revenue Growth</h4>
                    <span>Strategy</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item business marketing">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Market Expansion</h4>
                    <span>Marketing</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item consulting marketing">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Construction</h4>
                    <span>Financial Services</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item finance business">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Audit and Evaluation</h4>
                    <span>Business</span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portfolio-item consulting">
                <img src={pt1?.src} alt="Portfolio Grid" />
                <div className="overlay d-flex text-center">
                  <Link to="/portfolio-details">
                    <h4>Consumer Products</h4>
                    <span>Consulting</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
