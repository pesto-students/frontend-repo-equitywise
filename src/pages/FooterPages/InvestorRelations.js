import React from 'react';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const InvestorRelations = () => {
    return (
        <div>
            <Header />
            <main></main>
            <div className='container mx-auto p-8'>
                <h1 className='text-4xl font-bold mb-4 text-center'>Investor Relations</h1>
                <div className='bg-white shadow-md rounded-lg p-6'>
                    <p className='text-lg mb-4'>Welcome to our Investor Relations page.</p>
                    <p className='text-lg mb-4'>We are committed to maintaining transparent communication with our investors and stakeholders.</p>
                    <p className='text-lg mb-4'>Here, you will find the latest updates on our 
                        <ul className='list-disc list-inside mb-4 pl-4'>
                            <li className='mb-2'>Financial Performance</li>
                            <li className='mb-2'>Strategic Initiatives</li>
                            <li  className='mb-2'>Other Important Information</li>
                        </ul>
                    </p>
                </div>
                <p>If you have any questions or need further information, please do not hesitate to contact us at investors@pestoapp.com.</p>
            </div>
            <Footer />
        </div>
    );
}

export default InvestorRelations;