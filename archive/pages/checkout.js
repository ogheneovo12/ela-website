import React from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CheckOut from '../components/shop/checkout/CheckOut'
import Footer from '../components/other/Footer'

export default function CheckoutPage() {
    return (
        <main className="checkout-page">
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Checkout" />

            {/* Checkout */}
            <section className="checkout-area">
                <CheckOut />
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
