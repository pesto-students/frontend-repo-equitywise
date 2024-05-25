import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-lg mb-4">
                        This app was created by three Pesto students under the mentorship of Chiran:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li className="mb-2">Indi</li>
                        <li className="mb-2">Subha</li>
                        <li className="mb-2">Shri</li>
                    </ul>
                    <p className="text-lg mb-4">
                        The objective behind the app is to enable our users to easily track all their investments in one place.
                    </p>
                    <p className="text-lg mb-4">
                        In Phase 1, we aim to track only equity investments. In Phase 2, we intend to track bonds and fixed income assets. In Phase 3, we hope to introduce trading options. Finally, in Phase 4, we plan to allow tracking of other assets like gold and precious materials.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;