import {
  FaDonate,
  FaFacebookF,
  FaGooglePlusG,
  FaHandshake,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import {
  FiBarChart,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiLock,
  FiMonitor,
  FiTarget,
  FiUserCheck,
} from "react-icons/fi";
import React from "react";

import logo from "../assets/images/logo.png"; // 33x33
import flat1 from "../assets/images/flag.jpg"; // 33x33
import flat2 from "../assets/images/flag2.jpg"; // 33x33
import flat3 from "../assets/images/flag3.jpg"; // 33x33
import herosliderbg from "../assets/images/shop-slider1.jpg"; // 1920x1024
import { HiUserGroup } from "react-icons/hi";
import {
  AiOutlineCheckCircle,
  AiOutlineDollar,
  AiOutlineFileSearch,
  AiOutlineNotification,
  AiOutlineRocket,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import {
  IoIosBuild,
  IoIosHammer,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { TiLightbulb } from "react-icons/ti"; // 750x470
import img1 from "../assets/images/about-img.jpg"; // 458x315
import img2 from "../assets/images/about-img4.jpg"; // 555x354
import img3 from "../assets/images/testi-img1.jpg"; // 100x100
import img4 from "../assets/images/img1.jpg"; // 360x370
import gen_sec_img from "../assets/images/gen-sec.jpeg"
import vp_img from "../assets/images/vp.jpeg"
import img5 from "../assets/images/client1.png"; // 110x39
import img6 from "../assets/images/client2.png"; // 160x32
import img7 from "../assets/images/client3.png"; // 156x33
import img8 from "../assets/images/client4.png"; // 137x36
import img9 from "../assets/images/client5.png"; // 161x35
import img10 from "../assets/images/img1.jpg"; // 555x368
import img11 from "../assets/images/img11.jpg"; // 1140x594
import img12 from "../assets/images/team-8.jpg"; // 360x453
import img13 from "../assets/images/img3.jpg"; // 360x240
import img14 from "../assets/images/img15.jpg"; // 1140x608
import slider1 from "../assets/images/img12.jpg"; // 750x469
import img15 from "../assets/images/img22.jpg"; // 350x256
import errorimg from "../assets/images/404-img3.gif"; // 550x476
import chartimg from "../assets/images/chart-bar.png";
import category1 from "../assets/images/shopimg.jpg"; // 570x290
import CountUp from "react-countup";
import footerLogo from "../assets/images/logo2.png";
import { GiCutDiamond, GiLoincloth } from "react-icons/gi";

const sectiondata = {
  HeaderData: {
    HeaderBar: {
      phoneNumber: "+402 402 5839",
      email: "example@gmail.com",
      location: "1st Avenue, Boston",
      socialLists: [
        {
          icon: <FaFacebookF />,
          url: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          url: "https://twitter.com",
        },
        {
          icon: <FaYoutube />,
          url: "https://youtube.com",
        },
      ],
      languages: [
        {
          name: "English",
          flag: flat1,
          url: "#",
        },
        {
          name: "USA",
          flag: flat2,
          url: "#",
        },
        {
          name: "France",
          flag: flat3,
          url: "#",
        },
      ],
      btntext: "Work With Us",
      btnicon: <FiChevronRight className="icon" />,
      btnurl: "#",
    },
    HeaderMenuBar: {
      logourl: logo,
      menus: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About Us",
          path: "/about",
        },
        {
          title: "Ela's Fellowship",
          path: "/services",
        },
        {
          title: "Events & Projects",
          path: "/portfolio-grid",
        },
        {
          title: "Blog",
          path: "/blog-grid",
        },
        {
          title: "Gallery",
          path: "/gallery",
        },
        {
          title: "Contact",
          path: "/contact",
        },
      ],
    },
  },
  Sliders: {
    heroSlider1: [
      {
        title: "We Are a Group Of Lawyers and Attorneys",
        description:
          "We exist to enrich lives, promote social equality and advance understanding in the Nigerian Legal System through integrity, service, leadership and diversity.",
        button1: "Get Started",
        button2: "Learn More",
        button1url: "#",
        button2url: "#",
        bg: herosliderbg?.src,
        col: "8",
      },
      {
        title: "We Promote and support law reform initiatives",
        description:
          "To be a vibrant and socially conscious Association, making a difference while fostering commitment, diversity, fellowship as well as integrity amongst lawyers, professionals and the public.",
        button1: "Let's Start Now",
        button2: "Learn More",
        button1url: "#",
        button2url: "#",
        bg: herosliderbg?.src,
        col: "8 offset-2 text-center",
      },
      {
        title: "Promote networking opportunities among members.",
        description:
          "Our organization strives to aid its fellows attain membership into International Law Societies and networks for wider range of professional relationships and expertise.",
        button1: "Let's Start Now",
        button2: "Learn More",
        button1url: "#",
        button2url: "#",
        bg: herosliderbg?.src,
        col: "8",
      },
    ],
    testimonial: [
      {
        name: "Tanbir_Ahmed",
        city: "United States",
        img: img1,
        desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme.",
      },
      {
        name: "Mark_Doe",
        city: "United States",
        img: img1,
        desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme.",
      },
      {
        name: "Rizon_Pet",
        city: "United States",
        img: img1,
        desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme.",
      },
    ],
    clientlogos: [
      {
        img: img5,
      },
      {
        img: img6,
      },
      {
        img: img7,
      },
      {
        img: img8,
      },
      {
        img: img9,
      },
    ],
    heroSlider2: [
      {
        title: "Minzel Gives You Power to Grow Your Business.",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.",
        button1: "Get Started",
        button2: "Learn More",
        button1url: "/",
        button2url: "/",
        bg: herosliderbg?.src,
        col: "8",
      },
      {
        title: "Your Business Success is Our Success.",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.",
        button1: "Let's Start Now",
        button2: "Learn More",
        button1url: "/",
        button2url: "/",
        bg: herosliderbg?.src,
        col: "8 offset-2 text-center",
      },
      {
        title: "Work With World Class Finance Experts.",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.",
        button1: "Let's Start Now",
        button2: "Learn More",
        button1url: "/",
        button2url: "/",
        bg: herosliderbg?.src,
        col: "8",
      },
    ],
    shopheroslider: [
      {
        title: "Hand Picked Items Sold Exclusively Online.",
        description:
          "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
        button1: "Shop Now",
        button2: "All Products",
        button1url: "/shop",
        button2url: "/shop",
        bg: herosliderbg?.src,
        col: "8",
      },
      {
        title: "Find That Perfect Gift and Surprise Someone.",
        description:
          "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
        button1: "Shop Now",
        button2: "All Products",
        button1url: "/shop",
        button2url: "/shop",
        bg: herosliderbg?.src,
        col: "8 offset-2 text-center",
      },
      {
        title: "Beautifully Design Pieces by  Talented Designers..",
        description:
          "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
        button1: "Shop Now",
        button2: "All Products",
        button1url: "/shop",
        button2url: "/shop",
        bg: herosliderbg?.src,
        col: "8",
      },
    ],
  },
  Services: {
    Service1: {
      secTitle: "We Are The Elite Lawyers Association.",
      secSubtitle: "What we do.",
      secButton: "Learn More",
      secButtonUrl: "/",
      serviceLists: [
        {
          icon: <GiGraduateCap className="service-items-icon" />,
          title: "ElA Academy.",
          titleurl: "/service-details",
          description:
            "The ELA is a platform where legal minds and professionals enjoy sensitization from renowned and vastly experienced professionals regarding practical aspects of the law and other sectors of life",
          showbtn: true,
          buttontext: "Learn More",
          buttonurl: "/service-details",
        },
        {
          icon: <HiUserGroup className="service-items-icon" />,
          title: "ELA Assocaition.",
          titleurl: "/service-details",
          description:
            "It is a platform of legal minds with the vision to be vibrant and proactive professionals, making a global difference while fostering commitment, diversity, fellowship and integrity amongst lawyers as well as the public.",
          showbtn: true,
          buttontext: "Learn More",
          buttonurl: "/service-details",
        },
        {
          icon: <GiLoincloth className="service-items-icon" />,
          title: "ELA Apparels",
          titleurl: "/service-details",
          description:
            "The Elite Lawyers Apparel (ELA) is your one-stop shop for the most luxurious and quality legal and professional cosmetics, outfits and accessories.",
          showbtn: false,
          buttontext: "Learn More",
          buttonurl: "/service-details",
        },
      ],
    },
    Service2: {
      sectitle: "We Provide Wide Range of Business Services.",
      secsubtitle: "You Deserve Best Services",
      content:
        "Investiga tiones demonstr averunt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus dynamicus, qui sequitur mutaety tion em consu etudium awquod he legunt saepius clary tyitas Investig atifonesw. tionem consu etudium.",
      buttontext: "Read More",
      buttonurl: "/service-details",
      lists: [
        {
          icon: <AiOutlineDollar />,
          title: "Consumer Products",
          titleurl: "/service-details",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          icon: <FiBriefcase />,
          title: "Adult Marketing",
          titleurl: "/service-details",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          icon: <FaDonate />,
          title: "Banking Advising",
          titleurl: "/service-details",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          icon: <FiBarChart2 />,
          title: "Business Growth",
          titleurl: "/service-details",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
      ],
    },
    Service3: [
      {
        icon: <FiTarget className="service-items-icon" />,
        title: "Our Mission.",
        titleurl: "/service-details",
        description:
          "To enrich lives, promote social equality and advance understanding in the Nigerian Legal System through integrity, service, leadership and diversity.",
        showbtn: true,
        buttontext: "Learn More",
        buttonurl: "/service-details",
      },
      {
        icon: <IoIosNotificationsOutline className="service-items-icon" />,
        title: "Our Vision.",
        titleurl: "/service-details",
        description:
          "To be a vibrant and socially conscious Association, making a difference while fostering commitment, diversity, fellowship as well as integrity amongst lawyers, professionals and the public.",
        showbtn: true,
        buttontext: "Learn More",
        buttonurl: "/service-details",
      },
      {
        icon: <FaHandshake className="service-items-icon" />,
        title: "Our Core Values.",
        titleurl: "/service-details",
        description:
          "Excellence • Social Equality •	Integrity •	Courage",
        showbtn: true,
        buttontext: "Learn More",
        buttonurl: "/service-details",
      },
    ],
    serviceVideo: {
      videoId: "t3tsMEhlvwM", // Enter YouTube Video's id here
      videobutton: "Watch",
      img: img11,
    },
    serviceDetails: {
      sliders: [slider1, slider1, slider1],
      title: "International Business Opportunities.",
      content1:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera tion in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.",
      content2:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      features: [
        {
          title: "Seed do eiusmod tempor incididunt ut",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "Exercitation ullamco laboris nis.",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "Quis nostrud exerc citation.",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "Andomised words which don't look",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "Commodo consequat duis autex.",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "Andomised words which don't look",
          icon: <FiCheckCircle className="icon" />,
        },
        {
          title: "All the Lorem ipsum generators",
          icon: <FiCheckCircle className="icon" />,
        },
      ],
      featuresimg: img13,
      plans: {
        img: img13,
        title: "Planning Strategy",
        content:
          "Adipisicing elit, sed do eiusmod tempor incididunt ul labore et dolore magna aliqua",
        lists: [
          {
            title: "research beyond the business plan",
            icon: <FiCheckCircle className="icon" />,
          },
          {
            title: "marketing options and rates.",
            icon: <FiCheckCircle className="icon" />,
          },
          {
            title: "the ability to turnaround consulting.",
            icon: <FiCheckCircle className="icon" />,
          },
        ],
      },
      project: {
        title: "Project Results.",
        content1:
          "There are many variations of passages of Lorem ipsum available, but the majority have suffered altera tion in some form, by injected,",
        content2:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. eu fugiat nulla pariatur.",
        content3:
          "Enim minim veniam quis nostrud. exercitation ullamco laboris nisi aliquip",
      },
      sidebar: {
        categories: {
          title: "Categories.",
          lists: [
            {
              title: "Finance Management",
              path: "/service-details",
            },
            {
              title: "Banking Investigation",
              path: "/service-details",
            },
            {
              title: "Business Insurance",
              path: "/service-details",
            },
            {
              title: "Car Insurance",
              path: "/service-details",
            },
            {
              title: "Market Research",
              path: "/service-details",
            },
            {
              title: "Home Insurance",
              path: "/service-details",
            },
            {
              title: "Life Insurance",
              path: "/service-details",
            },
            {
              title: "Health Insurance",
              path: "/service-details",
            },
          ],
        },
        contactinfos: {
          title: "Contact Us.",
          address: "121 King Street, USA, New York",
          phonenumber: "+1401574423",
          email: "example@support.com",
        },
        broucher: {
          title: "Brochures",
          content:
            "View our 2020 financial prospectus brochure for an easy to read guide on all of the services offer.",
          button: "Company Presentation",
          buttonurl: "#", // Enter download file url here
        },
      },
    },
  },
  Aboutdata: {
    about1: {
      title: "Welcome to Awards Winning Digital Marketing Agency.",
      subtitle: "Learn About Us",
      content:
        "Investiga tiones demonstr averunt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus dynamicus, qui sequitur mutaety tion em consu etudium awquod he legunt saepius clary tyitas Investig atifonesw. tionem consu etudium.",
      readmorebtn: "Read More",
      readmorebtnurl: "/about",
      supports: [
        {
          icon: <FiUserCheck />,
          title: "24/7 full Online Support",
        },
        {
          icon: <FiTarget />,
          title: "10 Years of Experience",
        },
        {
          icon: <TiLightbulb />,
          title: "Creative Finance Idea",
        },
      ],
      images: [img1, img1, img1],
      videobtn: "Play",
      videoId: "t3tsMEhlvwM", // Enter YouTube video's id here
      skills: [
        {
          title: "Finance.",
          percent: "90",
        },
        {
          title: "Business.",
          percent: "85",
        },
        {
          title: "Investment.",
          percent: "80",
        },
      ],
    },
    about2: {
      left: {
        title: "We Allow You to Manage & Grow Your Business.",
        content1:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        content2:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda distinctio eligendi eum molestiae odit ullam?",
        lists: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
        buttontext: "Get Started",
        buttonurl: "/",
      },
      right: {
        img1: img10,
        img2: img10,
        title: "We Are Trusted by More Than 19,700 Clients",
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        buttontext: "Join Now",
        buttonurl: "/",
      },
    },
  },
  portfoliodata: {
    img: img14,
    client: "TechyDevs Ltd.",
    date: "February 20, 2020",
    services: [
      {
        title: "Business",
        path: "/",
      },
      {
        title: "Consulting",
        path: "/",
      },
    ],
    website: "www.techydevs.com",
    title: "Business Management.",
    content1:
      "Dut perspiciatis unde omnis iste natus error sit voluptatems accusantium doloremqu laudantiums ut, totams se aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae duis autems vell eums iriure dolors in hendrerit saep. HUGE bump in visitor-to-leads conversion. Just moving our same opt-in offer from the sidebar to the header I went from 2 percent of visitors becoming subscribers to 5 percent.",
    content2:
      "Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis. Optimizing this above-the-fold area to make the most of the screen real estate had the biggest impact of all the things I tested. Switching my opt-in box from the sidebar on the right to the header area just below my logo and navigation was a",
    content3:
      "Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis. Optimizing this above-the-fold area to make the most of the screen real estate had the biggest impact of all the things I tested. Switching my opt-in box from the sidebar on the right to the header area just below my logo and navigation was a",
    projectfeature: {
      title: "Project Features",
      lists: [
        "Strategy and Optimisation consulting",
        "Technologies And Innovations consultant",
        "Financial Planning consultant",
        "Marketing business plan",
        "Advice business plan",
        "Strategy business plan",
        "Analize business plant",
        "Consulting business plan",
      ],
    },
    solutions: {
      title: "Solutions",
      content:
        "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      lists: [
        "Strategy And Optimization consulting",
        "Technologies And Innovations consultant",
        "Financial Planning consultant",
        "Secured Transactions consultant",
      ],
    },
    bestresult: {
      title: "Better Results",
      img: chartimg,
    },
    relatedproject: {
      title: "Related Projects.",
      lists: [
        {
          img: img15,
          title: "Business Management",
          path: "/portfolio-details",
          cat: "Business",
        },
        {
          img: img15,
          title: "Digital Analysis",
          path: "/portfolio-details",
          cat: "Business",
        },
        {
          img: img15,
          title: "Fund Management",
          path: "/portfolio-details",
          cat: "Finance",
        },
      ],
    },
  },
  Tabdata: {
    tab1: {
      secTitle: "Why Choose Us.",
      secSubtitle: "Our Best Features",
      tabsnav: [
        {
          title: "Expert Team",
        },
        {
          title: "Best Finance Brand",
        },
        {
          title: "Best Leadership Ideas",
        },
      ],
      items: [
        {
          img: img2,
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
          button: "Get Started",
          buttonurl: "#",
        },
        {
          img: img2,
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
          button: "Get Started",
          img_position: "img_right",
          buttonurl: "#",
        },
        {
          img: img2,
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
          button: "Get Started",
          buttonurl: "#",
        },
      ],
    },
    tab2: {
      secTitle: "Why People Choose Us.",
      secSubtitle: "Our Best Features.",
      tabnav: [
        {
          title: "Wide Range Of Business Services",
          content:
            "The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top",
        },
        {
          title: "Our Best Features For You",
          content:
            "The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top",
        },
        {
          title: "Skills To Fulfill Your Jobs",
          content:
            "The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top",
        },
        {
          title: "Our Expert Team",
          content:
            "The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top",
        },
      ],
      tablists: [
        {
          title: "We Can Give the Best Facilities for Business",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.",
          lists: [
            {
              icon: <FiLock />,
              title: "Top Security",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <FiBarChart />,
              title: "Revenue Growth",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <FiUserCheck />,
              title: "Risk Manage",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <GiCutDiamond />,
              title: "Fast Support",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
          ],
        },
        {
          title: "We Can Give the Best Facilities for Business",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.",
          lists: [
            {
              icon: <FiBarChart />,
              title: "Marketing Strategy",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <IoIosHammer />,
              title: "Best Solutions",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <AiOutlineRocket />,
              title: "Speed Optimization",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <GiCutDiamond />,
              title: "Quick Support",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
          ],
        },
        {
          title: "We Can Give the Best Facilities for Business",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.",
          lists: [
            {
              icon: <FiLock />,
              title: "Top Security",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <FiBarChart />,
              title: "Revenue Growth",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <FiUserCheck />,
              title: "Risk Manage",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <GiCutDiamond />,
              title: "Fast Support",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
          ],
        },
        {
          title: "We Can Give the Best Facilities for Business",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.",
          lists: [
            {
              icon: <FiBarChart />,
              title: "Marketing Strategy",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <IoIosHammer />,
              title: "Best Solutions",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <AiOutlineRocket />,
              title: "Speed Optimization",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
            {
              icon: <GiCutDiamond />,
              title: "Quick Support",
              content:
                "The argument in favor of using filler text goes some thing like this",
            },
          ],
        },
      ],
    },
    tab3: {
      tabnav: ["Audit", "Strategy", "Sustainability"],
      tablists: [
        {
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
        },
        {
          content:
            "All the Lorem Ipsum generators on the Internet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
        },
      ],
    },
  },
  CounterUp: {
    secTitle: "Numbers Speak.",
    secSubtitle: "See What Our",
    items: [
      {
        icon: <AiOutlineNotification className="icon" />,
        number: (
          <CountUp
            start={0}
            end={1300}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Finishing Projects",
      },
      {
        icon: <AiOutlineUsergroupAdd className="icon" />,
        number: (
          <CountUp
            start={0}
            end={195}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Team Members",
      },
      {
        icon: <FaHandshake className="icon" />,
        number: (
          <CountUp
            start={0}
            end={750}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Lovely Clients",
      },
      {
        icon: <AiOutlineCheckCircle className="icon" />,
        number: (
          <CountUp
            start={0}
            end={30}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Years Of Experience",
      },
    ],
    counterbottomtitle:
      "Do not hesitate to contact us for instant help and support",
    counterbottombtn: "Let's Start Now",
    counterbottombtnurl: "/",
  },
  shopdata: {
    category_collection: {
      secTitle: "Check Out Our Newest items.",
      secSubtitle: "Newest Collection For You",
      left: {
        title: "Product Collection",
        button: "Shop Now",
        img: category1,
        cardlink: "/shop",
      },
      right: {
        title: "Basket Collection",
        button: "Shop Now",
        img: category1,
        cardlink: "/shop",
      },
    },
    sidebar: {
      categories: {
        title: "Categories",
        lists: [
          {
            title: "Accents",
            number: "(11)",
            path: "/product-details",
          },
          {
            title: "Accessories",
            number: "(22)",
            path: "/product-details",
          },
          {
            title: "Bed & Bath",
            number: "(23)",
            path: "/product-details",
          },
          {
            title: "Chair",
            number: "(7)",
            path: "/product-details",
          },
          {
            title: "Clocks",
            number: "(3)",
            path: "/product-details",
          },
          {
            title: "Dining",
            number: "(11)",
            path: "/product-details",
          },
          {
            title: "Furniture",
            number: "(5)",
            path: "/product-details",
          },
          {
            title: "Gifts",
            number: "(31)",
            path: "/product-details",
          },
          {
            title: "Lighting",
            number: "(22)",
            path: "/product-details",
          },
          {
            title: "Smart TVs",
            number: "(13)",
            path: "/product-details",
          },
          {
            title: "Table",
            number: "(3)",
            path: "/product-details",
          },
        ],
      },
      productcolor: {
        title: "Product Color.",
        lists: ["black", "orange", "blue", "darkgray"],
      },
      populartags: {
        title: "Popular Tags",
        lists: [
          {
            title: "Armchairs",
            path: "/product-details",
          },
          {
            title: "Sofas",
            path: "/product-details",
          },
          {
            title: "Wood",
            path: "/product-details",
          },
          {
            title: "Office",
            path: "/product-details",
          },
          {
            title: "Desks",
            path: "/product-details",
          },
          {
            title: "Stools",
            path: "/product-details",
          },
          {
            title: "Footstools",
            path: "/product-details",
          },
          {
            title: "Outdoor",
            path: "/product-details",
          },
          {
            title: "Bedroom",
            path: "/product-details",
          },
        ],
      },
    },
  },
  Testimonialdata: {
    secTitle: "Say About Us.",
    secSubtitle: "See What Our Customers",
    imagesshape: [
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
      {
        img: img3,
      },
    ],
  },
  Teammemberdata: {
    secTitle: "Chaperones.",
    secSubtitle: "Meet Our Dedicated",
    teammembers: [
      {
        name: "Solomon Ita Enang, Esq",
        designation: "President",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Sandra Okpuno, Esq",
        designation: "Vice President",
        img: vp_img,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Victor C. Unegbu, Esq",
        designation: "General Secretary",
        img: gen_sec_img,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
    ],
    moreTeam: [
      {
        name: "Tanbir Ahmed",
        designation: "Director",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Adam Smith",
        designation: "Director",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Pam Sharon",
        designation: "Director",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Domien Doe",
        designation: "Junior Designer",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Pam Sharon",
        designation: "Director",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
      {
        name: "Richard Pam",
        designation: "Director",
        img: img4,
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
        buttontext: "Read His Story",
        buttonurl: "/team-details",
      },
    ],
    teamDetails: {
      img: img12,
      name: "Colling Roberts.",
      designation: "Founder & CEO",
      address: "Regional Leader Switzerland, Italy, Austria",
      phonenumber: "+123-134-6849",
      email: "example@gmail.com",
      website: "www.collinroberts.com",
      expertise: {
        title: "Areas Of Expertise",
        lists: [
          "Business transformation",
          "Restructuring and turnaround",
          "Integration",
          "Growth strategy",
        ],
      },
      educations: {
        title: "Education",
        lists: [
          "MBA, Rotterdam School of Management, Erasmus University",
          "BS, Engineering, Technical University of Denmark",
        ],
      },
      bottomContent: {
        title: "A Little Description About Me.",
        content1:
          "With over 20 years of experience in entrepreneurship, management, business planning, financial analysis, software engineering, operations, and decision analysis, Brandon has the breadth and depth of experience needed to quickly understand entrepreneurs businesses and craft the most suitable solutions.",
        content2:
          "Investing atones demons trave runt lectores legere liusry quod ilegunt saepies claritas Inves tig ationes. Our management team is led by the Managing Partner Peter Mockler who successfully accomplished the European management buyout. My focus areas reorganization of marketing and customer services and restructuring. Throughout my pro fessional career, I led various global consulting projects, launched new marketing concepts and managed implementations. Throughout my pro fessional career, I led various global consulting projects, launched new marketing concepts.",
        blockquote: {
          content:
            "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. lorem ipsum dolor sit amet.",
          name: "Amand Seyfrid,",
          designation: "Sales & Marketing, Alien Ltc.",
        },
      },
      sidebar: {
        needhelp: {
          title: "Need Any Help?",
          content:
            "Contact us at the Consulting office nearest to you or submit a business inquiry online",
          button: "Contact Us",
          buttonurl: "/contact",
        },
        companybtn: "Company Presentation",
        companybtnurl: "/", // Enter download file url here
      },
    },
  },
  faqdata: [
    {
      title: "How do I find my Windows product key?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "Do you have any built-in caching?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "Can i add/upgrade my plan at any time?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "What access comes with my hosting plan?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "How do i change my password?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "What's included?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "What services do you provide?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
    {
      title: "How much will it cost?",
      content:
        "Investiga tiones demonstr averun lectores legere melius quod kequa legunt saepius. Claritas est etiam pro cessus dynamicus qui sequitur mutatin onem consuetudium. Investiga tiones demonstr averunt lectores legere me liusked quod kequa legunt saepius. Claritas est etiam pro cessus. Sequitur mutatin onem consuetudium.",
    },
  ],
  ctadata: {
    cta1: {
      title: "Subscribe Newsletter to Get Latest Discount.",
      content:
        "Be the first to hear about our latest products & offers. As a welcome gift, we’ll email you a 20% OFF discount code.",
    },
  },
  Chartareadata: {
    secTitle: "Better Results.",
    secSubtitle: "Our Growth",
    title1: "Increase Sales",
    content1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore sit amet, consectetur adipisicing elit. Sit, vitae.",
    title2: "Real-Time Analytics",
    content2:
      "Nullam sollicitudin nisl at nunc tempor pulvindolor sit amet, adipiscinar. Quisque gravida, tellus egett vehicula fel.",
    buttontext: "Learn More",
    buttonurl: "/about",
  },
  Pricingdata: {
    secTitle: "Choose Your Plan.",
    secSubtitle: "Affordable Packages",
    tablist: ["Monthly", "Yearly"],
    planlists: [
      {
        plans: [
          {
            title: "Basic",
            price: "19",
            currency: "$",
            mo: "/Monthly",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: false,
          },
          {
            title: "Popular",
            price: "39",
            currency: "$",
            mo: "/Monthly",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: true,
          },
          {
            title: "Premium",
            price: "78",
            currency: "$",
            mo: "/Monthly",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: false,
          },
        ],
      },
      {
        plans: [
          {
            title: "Basic",
            price: "200",
            currency: "$",
            mo: "/Year(save 20%)",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: false,
          },
          {
            title: "Popular",
            price: "460",
            currency: "$",
            mo: "/Year(save 20%)",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: true,
          },
          {
            title: "Premium",
            price: "300",
            currency: "$",
            mo: "/Year(save 20%)",
            features: [
              "Limitless concepts",
              "Community access",
              "Expert Reviews",
              "Creative Layouts",
              "Free Support",
              "Free Fonts",
            ],
            buttontext: "Get Started",
            buttonurl: "/",
            isactive: false,
          },
        ],
      },
    ],
  },
  errorpagedata: {
    img: errorimg,
    title: "Opps! Page not found.",
    content:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. You can check out our Help Center",
    connector: "or",
    backbtn: "Back To Home",
    footermenu: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About Us",
        path: "/about",
      },
      {
        title: "Service",
        path: "/services",
      },
      {
        title: "Contact",
        path: "/contact",
      },
    ],
  },
  contactdata: {
    secTitle: "Do You Have Any Question? Write Us a Message.",
    secSubtitle: "Get In Touch With Us",
    content:
      "Lorem ipsum is simply free text dolor sit amet quie adipiscing elit. When an unknown pricter took a gallery. quiaies lipsum dolor sit atur adip scing",
    socials: [
      {
        icon: <FaFacebookF />,
        url: "https://facebook.com",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com",
      },
      {
        icon: <FaInstagram />,
        url: "https://instagram.com",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://linkedin.com",
      },
      {
        icon: <FaGooglePlusG />,
        url: "https://plus.google.com",
      },
    ],
    sidebar: {
      title: "Our Office",
      img: img10,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa dolorum explicabo id incidunt iure",
      address: "Melbourne, Australia, 105 South Park Avenue",
      phonenum: "2800 256 508",
      phonenum2: "666 777 888",
      email: "Needhelp@minzel.com",
      email2: "inquiry@minzel.com",
      button: "Contact With Us",
    },
  },
  Footerdata: {
    ftLeftwidget: {
      footerlogo: footerLogo,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur auctor elit.",
      phonenumber: "+122 423 4948",
      email: "Support@Website.com",
      address: "1st Avenue, Boston",
      socials: {
        title: "Follow & Connect On.",
        lists: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaInstagram />,
            url: "https://instagram.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
          {
            icon: <FaYoutube />,
            url: "https://youtube.com",
          },
        ],
      },
    },
    ftCommonLinks: {
      title: "Need Help?",
      lists: [
        {
          title: "Community",
          url: "/services",
        },
        {
          title: "About Us",
          url: "/about",
        },
        {
          title: "Our Advisors",
          url: "/services",
        },
        {
          title: "Jobs",
          url: "/",
        },
        {
          title: "Keep In Touch",
          url: "/contact",
        },
        {
          title: "Forums",
          url: "/",
        },
        {
          title: "Contact Us",
          url: "/contact",
        },
      ],
    },
    ftSchedule: {
      title: "Working Hours.",
      offday: "Sat-Sun:",
      litss: [
        {
          day: "Monday:",
          time: "9am-4pm",
        },
        {
          day: "Tuesday:",
          time: "9am-4pm",
        },
        {
          day: "Wednesday:",
          time: "9am-4pm",
        },
        {
          day: "Thursday:",
          time: "9am-4pm",
        },
        {
          day: "Friday:",
          time: "9am-4pm",
        },
      ],
    },
  },
};
export default sectiondata;
