import React from 'react';
import Header from '../../Components/common/Header';
import Footer from '../../Components/common/Footer';

const Careers = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto p-8'>
            <h1 className='text-4xl font-bold mb-4 text-center'>Careers</h1>
            <div class="bg-white shadow-md rounded-lg p-6">
                <p className="text-lg mb-4">We are currently looking for talented individuals to join our team:</p>
                <br></br>
                <ul className="list-disc list-inside mb-4 pl-4">
                    <li className="mb-2">
                        Digital Marketing Expert
                        <details>
                            <summary>Read More</summary>
                            <p>We are seeking a Digital Marketing Expert to develop, implement, and manage marketing campaigns that promote our company and products. Responsibilities include enhancing brand awareness within the digital space, driving website traffic, and acquiring leads/customers. The ideal candidate should have experience with SEO, PPC, social media marketing, and analytics tools.</p>
                        </details>
                    </li>
                    <br></br>
                    <li className="mb-2">
                        Quality Assurance (QA) Engineer
                        <details>
                            <summary>Read More</summary>
                            <p>We are looking for a Quality Assurance Engineer to ensure our products and services meet all necessary requirements before they reach the consumer. The QA Engineer will inspect the final product to make sure it has been built with compliance to legal standards and meets customer expectations. Proven experience as a QA tester or similar role is required, along with a thorough knowledge of methodologies of quality assurance and standards.</p>
                        </details>
                    </li>
                    <br></br>
                    <li className="mb-2">
                        Fixed Income Expert
                        <details>
                            <summary>Read More</summary>
                            <p className="text-lg mb-4">We are in need of a Fixed Income Expert who will be responsible for analyzing and managing our fixed income investment portfolio. Responsibilities include researching and analyzing fixed income securities, monitoring market trends, and providing investment recommendations. The ideal candidate should have strong analytical skills, a deep understanding of fixed income products, and experience in investment management.</p>
                        </details>
                    </li>
                </ul>
                </div>
                <br></br>
                <p>If you're interested in any of these positions, please contact us at careers@pestoapp.com.</p>
            </main>
            <Footer />
        </div>
    );
}

export default Careers;