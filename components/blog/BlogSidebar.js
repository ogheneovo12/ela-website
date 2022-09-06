import React, { Component } from 'react'
import { BlogContext } from 'components/context/context'
import WidgetSearch from "../widgets/WidgetSearch";
import BlogWidgetCategory from "../widgets/BlogWidgetCategory";
import BlogWidgetArchive from '../widgets/BlogWidgetArchive'
import BlogWidgetTag from '../widgets/BlogWidgetTag'
import BlogWidgetFollower from '../widgets/BlogWidgetFollower'
import BlogWidgetFeatured from '../widgets/BlogWidgetFeatured'

export default class BlogSidebar extends Component {
    static contextType = BlogContext;
    render() {
        let { featuredBlogs: blogs } = this.context;
        blogs = blogs.map((blog, index) => {
            return <BlogWidgetFeatured key={index} blog={blog} />
        });
        return (
            <aside className="blog-sidebar">
                <WidgetSearch />
                <BlogWidgetCategory />
                <div className="blog-sidebar-widget recent-posts">
                    <h3>Recent News.</h3>
                    <ul>
                        {blogs}
                    </ul>
                </div>
                <BlogWidgetArchive />
                <BlogWidgetTag />
                <BlogWidgetFollower />

            </aside>
        )
    }
}
