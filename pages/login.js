import React  from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import Login from '../components/other/LoginForm';
import Footer from '../components/other/Footer';

export default function LoginPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Login." />

            {/* Login Form */}
            <Login />

            {/* Footer */}
            <Footer />
        </>
    )

}
