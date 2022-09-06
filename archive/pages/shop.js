import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import AllProducts from '../components/shop/AllProducts'
import ShopSidebar from '../components/shop/ShopSidebar'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi'
import Footer from '../components/other/Footer'

export default function Shop() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Shop." />

            {/* Shop */}
            <section className="shop-sidebar-wrapper text-center">
                <div className="container">
                    <div className="shop-sidebar-grid d-grid">
                        <div className="left">
                            <ShopSidebar />
                        </div>
                        <div className="right">
                            <div className="shop-sidebar-product-ordering d-flex">
                                <div className="ordering-left">
                                    <FiChevronDown className="icon" />
                                    <select name="select" id="select">
                                        <option value="0">Sort by latest</option>
                                        <option value="1">Sort by new</option>
                                        <option value="2">Sort by average rating</option>
                                        <option value="3">Sort by latest</option>
                                        <option value="4">Sort by price: low to high</option>
                                        <option value="5">Sort by price: high to low</option>
                                    </select>
                                </div>
                                <div className="ordering-right">
                                    <p>Showing 1-15 of 103 products</p>
                                </div>
                            </div>
                            <div className="products d-grid">
                                <AllProducts />
                            </div>
                            <ul className="pagination d-flex">
                                <li><Link className='page-link' to="/blog-full-width"><FiChevronLeft /></Link></li>
                                <li><Link className='page-link' to="/blog-full-width">1</Link></li>
                                <li><span className="page-link current">2</span></li>
                                <li><Link className='page-link' to="/blog-full-width">3</Link></li>
                                <li><Link className='page-link' to="/blog-full-width"><FiChevronRight /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}
