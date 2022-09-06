import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiShoppingCart,
  FiSearch,
  FiChevronRight,
} from "react-icons/fi";
import HeaderBar from "../common/HeaderBar";
import { ProductConsumer } from "components/context/productcontext";
import $ from "jquery";
import MenuCart from "./menucart/MenuCart";
import { FaTimes } from "react-icons/fa";
import sectiondata from "../../store/store";

export default function Navbar() {
  const [searchOpen, setsearchOpen] = useState(false);
  const [navOpen, setnavOpen] = useState(false);

  React.useEffect(() => {
    /*====  side-widget-menu  =====*/
    $(document).on(
      "click",
      ".side-menu-wrap .side-menu-ul .sidenav__item",
      function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item").removeClass("active");
        $(this).toggleClass("active");
      }
    );
    $(document).on(
      "click",
      ".side-menu-wrap .side-menu-ul .sidenav__item.active",
      function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item.active").removeClass(
          "active"
        );
      }
    );

    $(window).on("scroll", function () {
      // Header Menu Fixed
      if ($(window).scrollTop() > 30) {
        $("body").addClass("header-menu-fixed");
        $(".scroll-d-block").addClass("d-block");
      } else {
        $("body").removeClass("header-menu-fixed");
        $(".scroll-d-block").removeClass("d-block");
      }
    });
  }, []);

  return (
    <>
      <HeaderBar />

      <div className="header-menu-wrapper scroll-d-block">
        <div className="header-menu-container container">
          <div className="header-menu-flex">
            <div className="header-menu-left">
              <Link to="/">
                <img
                  src={sectiondata.HeaderData.HeaderMenuBar.logourl.src}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="header-menu-right">
              <nav>
                <ul>
                  {sectiondata.HeaderData.HeaderMenuBar.menus.map(
                    (item, index) => {
                      return (
                        <li key={index}>
                          <Link to={item.path}>
                            {item.title}{" "}
                            {item.dropdown ? (
                              <FiChevronDown className="menu-icon" />
                            ) : (
                              ""
                            )}
                          </Link>
                          {item.dropdown ? (
                            <ul className="dropdown-menu-item">
                              {item.dropdown.map((dp_item, i) => {
                                return (
                                  <li key={i}>
                                    <Link to={dp_item.path}>
                                      {dp_item.title}{" "}
                                      {dp_item.dep_dropdown ? (
                                        <FiChevronRight className="icon" />
                                      ) : (
                                        ""
                                      )}
                                    </Link>
                                    {dp_item.dep_dropdown ? (
                                      <ul className="dropdown-menu-item">
                                        {dp_item.dep_dropdown.map(
                                          (dp_item_inr, i2) => {
                                            return (
                                              <li key={i2}>
                                                <Link to={dp_item_inr.path}>
                                                  {dp_item_inr.title}
                                                </Link>
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    ) : (
                                      ""
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
              <div className="header-menu-right-flex">
                <div className="header-menu-cart">
                  <ul>
                    
                    <li>
                      <Link
                        to="#"
                        className="search-button"
                        onClick={() => setsearchOpen(!searchOpen)}
                      >
                        {searchOpen ? (
                          <FaTimes className="search-icon" />
                        ) : (
                          <FiSearch className="search-icon" />
                        )}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={
                    searchOpen
                      ? "header-menu-searchform active"
                      : "header-menu-searchform"
                  }
                >
                  <form action="#">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search by keywords..."
                    />
                    <div className="form-icon">
                      <FiSearch className="search-icon" />
                    </div>
                  </form>
                </div>
                <div
                  className="side-menu-open"
                  onClick={() => setnavOpen(!navOpen)}
                >
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={navOpen ? "side-nav-container active" : "side-nav-container"}
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setnavOpen(!navOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            {sectiondata.HeaderData.HeaderMenuBar.menus.map((item, index) => {
              return (
                <li className="sidenav__item" key={index}>
                  <a href={item.path}>{item.title}</a>
                  {item.dropdown ? (
                    <span className="menu-plus-icon"></span>
                  ) : (
                    ""
                  )}
                  {item.dropdown ? (
                    <ul className="side-sub-menu">
                      {item.dropdown.map((dp_item, i) => {
                        return (
                          <li key={i}>
                            <a href={dp_item.path}>{dp_item.title}</a>
                            {dp_item.dep_dropdown ? (
                              <ul className="dropdown-menu-item">
                                {dp_item.dep_dropdown.map((dp_item_inr, i2) => {
                                  return (
                                    <li key={i2}>
                                      <Link to={dp_item_inr.path}>
                                        {dp_item_inr.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
            <li className="sidenav__item sidenav__item2 text-center">
              <Link to="/sign-up">sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
