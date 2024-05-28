import React from 'react';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const SecurityInformation = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4 text-center">Security Information</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-lg mb-4">
                        At Equity Wise, we take the security of your data very seriously. We have implemented robust security measures to ensure that your personal and financial information is protected at all times.
                    </p>
                    <h2 className="text-2xl font-bold mb-2">Data Security</h2>
                    <p className="text-lg mb-4">
                        Our data security policy includes:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li className="mb-2">Encryption of sensitive data both in transit and at rest.</li>
                        <li className="mb-2">Regular security audits and vulnerability assessments.</li>
                        <li className="mb-2">Implementation of multi-factor authentication for user access.</li>
                        <li className="mb-2">Continuous monitoring of our systems for suspicious activity.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-2">Security of Our Systems</h2>
                    <p className="text-lg mb-4">
                        To prevent unauthorized access and ensure the integrity of our systems, we have employed:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li className="mb-2">Advanced firewalls and intrusion detection systems.</li>
                        <li className="mb-2">Regular software updates and patch management.</li>
                        <li className="mb-2">Secure coding practices and regular code reviews.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SecurityInformation;