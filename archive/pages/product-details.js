import React  from 'react'
import Navbar from '../components/common/Navbar'
import SectionsTitle from '../components/common/SectionsTitle'
import Breadcrumb from '../components/common/Breadcrumb'
import ProductDetailsItem from '../components/shop/ProductDetailsItem'
import Divider from '../components/other/Divider'
import RelatedProducts from '../components/shop/RelatedProducts'
import Footer from '../components/other/Footer'

export default function ProductDetailsPage() {
    return (
        <>
            <header className="header-area">
                <Navbar />
            </header>
            <Breadcrumb title="Product Details." />
            <ProductDetailsItem />
            <Divider />
            <section className="related-products-wrapper text-center">
                <SectionsTitle title="Related Products." subtitle="Great Collection For You" />
                <RelatedProducts />
            </section>
            <Footer />
        </>
    )
}


