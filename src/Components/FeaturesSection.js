import React from 'react';

const FeatureSection = () => {
  return (
    <section id="features" className="space-y-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-2xl font-bold mb-2">Live Stock Price Tracking:</h3>
            <p className="text-lg">Be updated with the real-time stock prices.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/assets/images/1_stock_price_tracking.jpeg" alt="Live Stock Price Tracking" className="w-full h-auto" />
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src="/assets/images/2_equity_portfoliomanagement.webp" alt="Equity Portfolio Management" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-left p-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Equity Portfolio Management</h3>
            <p className="text-lg">Create up to 4 equity portfolios to track your and your family’s equity holdings.</p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-2xl font-bold mb-2">Performance Analysis</h3>
            <p className="text-lg">Know detailed insights on how your stocks are performing and track the market trends.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/assets/images/3_performance_analysis.jpg" alt="Performance Analysis" className="w-full h-auto" />
          </div>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src="/assets/images/4_performance_analysis.png" alt="Portfolio Analysis" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-left p-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Portfolio Analysis</h3>
            <p className="text-lg">Create your portfolio to know the status of all your holdings both through easily interpretable tables and through visual dashboards.</p>
          </div>
        </div>
        {/* Feature 5 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-2xl font-bold mb-2">Dividend Income Tracker</h3>
            <p className="text-lg">Monitor and track the income generated through the dividends paid through your stock holdings</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/assets/images/5_track_your_wishlist.jpeg" alt="Dividend Income Tracker" className="w-full h-auto" />
          </div>
        </div>
        {/* Feature 6 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src="/assets/images/6_divided_income_tracking.jpeg" alt="Track Your Wishlist" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-left p-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Track your Wishlist</h3>
            <p className="text-lg">Create and track the stocks which you could potentially be added to your portfolio.</p>
          </div>
        </div>
        {/* Feature 7 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-2xl font-bold mb-2">Stock News Update</h3>
            <p className="text-lg">Remain updated with the market news both at macro level and at the stock level.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/assets/images/7_stock_market_updateDashboard_MarketNews.png" alt="Stock News Update" className="w-full h-auto" />
          </div>
        </div>
        {/* Feature 8 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src="/assets/images/8_cross_device_compatibility.jpeg" alt="Cross Device Compatibility" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-left p-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Cross Device Compatibility</h3>
            <p className="text-lg">View and manage your portfolio seamlessly across all your devices including desktops, tabs, and mobiles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;