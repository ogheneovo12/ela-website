import React  from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CartDetails from '../components/shop/cart/CartDetails'
import Footer from '../components/other/Footer'

export default function CartPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Cart." />

            {/* Cart Details */}
            <CartDetails />

            {/* Footer*/}
            <Footer />
        </>
    )
}
