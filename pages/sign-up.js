import React  from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import SignUpForm from '../components/other/SignUpForm';
import Footer from '../components/other/Footer';

export default function SignUpPage() {
    return (
        <>
            {/* Header */}
            <header className="header-area">
                <Navbar />
            </header>

            {/* Breadcrumb */}
            <Breadcrumb title="Sign Up." />

            {/* Signup Form*/}
            <SignUpForm />

            {/* Footer */}
            <Footer />
        </>
    )
}
