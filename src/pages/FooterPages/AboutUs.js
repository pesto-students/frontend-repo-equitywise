import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-lg mb-4">
                        This app was created by three Pesto students under the mentorship of Chiranjib Nandy:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li className="mb-2">Indiwar Hundal</li>
                        <li className="mb-2">Subhashini Yenikapati</li>
                        <li className="mb-2">Shrishyle Narayan Pandit</li>
                    </ul>
                    <p className="text-lg mb-4">
                        The objective behind the app is to enable our users to easily track all their investments in one place.
                    </p>
                    <p className="text-lg mb-4">
                        In Phase 1, we aim to track only equity investments. In Phase 2, we intend to track bonds and fixed income assets. In Phase 3, we hope to introduce trading options. Finally, in Phase 4, we plan to allow tracking of other assets like gold and precious materials.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;