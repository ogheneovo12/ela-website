import React  from 'react'
import Navbar from '../components/common/Navbar'
import ShopHeroSlider from '../components/sliders/ShopHeroSlider'
import ShopCategoryCollection from '../components/shop/ShopCategoryCollection'
import SectionsTitle from '../components/common/SectionsTitle'
import BestProducts from '../components/shop/BestProducts'
import BestSeller from '../components/shop/BestSeller'
import Divider from '../components/other/Divider'
import Footer from '../components/other/Footer'
import { FiRefreshCcw, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import FeaturedProduct from '../components/shop/FeaturedProduct'
import Clients from "../sections/Clients";
import Blog from '../components/blog/Blog'
import sectiondata from "../store/store";
import TestimonialSection from "../sections/TestimonialSections";
import CtaNewsletter from "../sections/CtaNewsletter";


export default function ShopHomePage() {
    return (
        <main className="shop-home">
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Shop Hero Slider*/}
            <ShopHeroSlider sliders={sectiondata.Sliders.shopheroslider} />

            {/* Newest Collection*/}
            <section className="shop-category-collection-wrapper">
                <div className="text-center">
                    <SectionsTitle title={sectiondata.shopdata.category_collection.secTitle} subtitle={sectiondata.shopdata.category_collection.secSubtitle} />
                </div>
                <ShopCategoryCollection left={sectiondata.shopdata.category_collection.left} right={sectiondata.shopdata.category_collection.right} />
            </section>

            {/* Best Products */}
            <section className="shop-best-products-wrapper text-center">
                <SectionsTitle title="Best Products." subtitle="Great Collection For You" />
                <BestProducts />
                <div className="loadmore">
                    <Link className="theme-button" to="/shop">Load More Product <FiRefreshCcw className="icon" /></Link>
                </div>
            </section>

            {/* Featured Product */}
            <FeaturedProduct />

            {/* Best selling products*/}
            <section className="shop-best-products-wrapper best-seller text-center">
                <SectionsTitle title="Best Selling Products." subtitle="Check Out Our" />
                <BestSeller />
                <div className="loadmore">
                    <Link className="theme-button" to="/shop">Load More Product <FiRefreshCcw className="icon" /></Link>
                </div>
            </section>
            <Divider />

            {/* Testimonial */}
            <TestimonialSection
                secTitle={sectiondata.Testimonialdata.secTitle}
                secSubtitle={sectiondata.Testimonialdata.secSubtitle}
                sliders={sectiondata.Sliders.testimonial}
                imgshapes={sectiondata.Testimonialdata.imagesshape} />

            {/* Clients Logo */}
            <section className="clients-wrapper-bg">
                <Clients sliders={sectiondata.Sliders.clientlogos} />
            </section>

            {/* Newsletter */}
            <CtaNewsletter
                title={sectiondata.ctadata.cta1.title}
                content={sectiondata.ctadata.cta1.content} />
            <Divider />

            {/* Latest news */}
            <div className="h-blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <SectionsTitle title="Our Recent News." subtitle="Latest From The Blog" />
                        </div>
                        <div className="col-4 text-right">
                            <Link to="/blog-grid" className="theme-button">View All Posts <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </div>
                <Blog />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    )
}
