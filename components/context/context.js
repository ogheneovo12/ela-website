import React, { Component } from 'react'
import items from "./Data";

const BlogContext = React.createContext();

export default class BlogProvider extends Component {
    state = {
        blogs: [],
        featuredBlogs: []
    };
    // getData

    componentDidMount() {
        // this.getData
        let blogs = this.formatData(items);
        let featuredBlogs = blogs.filter(blog => blog.featured === true);
        this.setState({
            blogs,
            featuredBlogs,
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let blog = { ...item.fields, images, id };
            return blog;
        });
        return tempItems;
    }


    render() {
        return (
            <BlogContext.Provider
                value={{
                    ...this.state,
                }}
            >
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}


const BlogConsumer = BlogContext.Consumer;

export function withBlogConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <BlogConsumer>
                {value => <Component {...props} context={value} />}
            </BlogConsumer>
        );
    };
}

export { BlogProvider, BlogConsumer, BlogContext };
