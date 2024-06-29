import React from 'react';

const FAQs = () => {
    return (
        <div>
            <main className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions (FAQs)</h1>
                <ul className="space-y-6">
                    <li>
                        <strong className="block text-xl mb-2">Q: What is the main purpose of the app?</strong>
                        <p className="text-lg">A: The app helps users track all their investments in one place.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Which investments can I track with this app?</strong>
                        <p className="text-lg">A: Currently, you can track equity investments. Future phases will include bonds, fixed income assets, trading options, and other assets like gold and precious materials.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Is the app free to use?</strong>
                        <p className="text-lg">A: Yes, the app is free to use. However, some advanced features may require a subscription.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: How can I sign up for the app?</strong>
                        <p className="text-lg">A: You can sign up through the Signup page on our website.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: How do I reset my password?</strong>
                        <p className="text-lg">A: You can reset your password through the Login page by clicking on 'Forgot Password'.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Can I track multiple portfolios?</strong>
                        <p className="text-lg">A: Yes, you can track multiple portfolios within the app.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: How often is the market data updated?</strong>
                        <p className="text-lg">A: Market data is updated in real-time.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Is my data secure?</strong>
                        <p className="text-lg">A: Yes, we take data security very seriously and use advanced encryption methods to protect your information.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Can I export my portfolio data?</strong>
                        <p className="text-lg">A: Yes, you can export your portfolio data to a CSV file.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Does the app support international stocks?</strong>
                        <p className="text-lg">A: Currently, we support a range of international stocks, with more being added regularly.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: How do I contact support?</strong>
                        <p className="text-lg">A: You can contact our support team through the Contact Us page or by emailing support@pestoapp.com.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Are there any tutorials available?</strong>
                        <p className="text-lg">A: Yes, we provide tutorials and guides on our website and YouTube channel.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: Can I set up alerts for my investments?</strong>
                        <p className="text-lg">A: Yes, you can set up custom alerts for your investments.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: What are the future plans for the app?</strong>
                        <p className="text-lg">A: Future plans include tracking bonds, fixed income assets, trading options, and other assets like gold and precious materials.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Q: How do I provide feedback?</strong>
                        <p className="text-lg">A: You can provide feedback through our Contact Us page or by emailing feedback@pestoapp.com.</p>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default FAQs;