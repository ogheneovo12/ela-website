import React  from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import ForgotPassForm from '../components/other/ForgotPassForm';
import Footer from '../components/other/Footer';

export default function LoginPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Recover Password." />

            {/* Forgot Password Form */}
            <ForgotPassForm />

            {/* Footer */}
            <Footer />
        </>
    )
}
