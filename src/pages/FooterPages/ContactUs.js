import React from 'react';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const ContactUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-8 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                    <p className="mb-4">We'd love to hear from you! You can reach us through the following contact details:</p>
                    <p className="mb-2"><span className="font-semibold">Address:</span> Pesto, 123 App Street, Tech City</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> contact@pestoapp.com</p>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> (123) 456-7890</p>
                    <p>For any other inquiries, please feel free to get in touch with us through our social media channels or visit our support page.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ContactUs;