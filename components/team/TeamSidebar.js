import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaRegFilePdf } from 'react-icons/fa'
import BlogWidgetFeatured from "../widgets/BlogWidgetFeatured";
import {BlogContext} from "components/context/context";
import TeamNeedHelp from "../widgets/TeamNeedHelp";
import SocialProfile from "../widgets/SocialProfile";
import sectiondata from "../../store/store";

export default class TeamSidebar extends Component {
    static contextType = BlogContext;
    render() {
        let { featuredBlogs: blogs } = this.context;
        blogs = blogs.map((blog, index) => {
            return <BlogWidgetFeatured key={index} blog={blog} />
        });
        return (
            <aside className="sidebar team-sidebar">
                {/* Team Need Help */}
                <TeamNeedHelp
                    title={sectiondata.Teammemberdata.teamDetails.sidebar.needhelp.title}
                    content={sectiondata.Teammemberdata.teamDetails.sidebar.needhelp.content}
                    button={sectiondata.Teammemberdata.teamDetails.sidebar.needhelp.button}
                    buttonurl={sectiondata.Teammemberdata.teamDetails.sidebar.needhelp.buttonurl} />


                <div className="sidebar-widget button">
                    <Link className="theme-button" to={sectiondata.Teammemberdata.teamDetails.sidebar.companybtnurl} download><FaRegFilePdf className="icon" /> {sectiondata.Teammemberdata.teamDetails.sidebar.companybtn}</Link>
                </div>

                {/* Recent News */}
                <div className="sidebar-widget recent-posts">
                    <h2>Recent News.</h2>
                    <ul>
                        {blogs}
                    </ul>
                </div>

                {/* Social Profile */}
                <div className="sidebar-widget sidebar-social-profile">
                    <SocialProfile title={sectiondata.Footerdata.ftLeftwidget.socials.title} lists={sectiondata.Footerdata.ftLeftwidget.socials.lists} />
                </div>
            </aside>
        )
    }
}
