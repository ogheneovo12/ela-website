import React, { Component } from "react";
import { BlogContext } from "components/context/context";
import BlogFeatures from "./BlogFeatures";

export default class Blog extends Component {
  static contextType = BlogContext;
  render() {
    let { featuredBlogs: blogs } = this.context;
    blogs = blogs.map((blog, index) => {
      return <BlogFeatures key={index} blog={blog} />;
    });
    return (
      <section className="blog-wrapper">
        <div className="container">
          <div className="blog-grid">{blogs}</div>
        </div>
      </section>
    );
  }
}
