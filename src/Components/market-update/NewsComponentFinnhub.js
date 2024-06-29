import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKeyFinnhub = process.env.REACT_APP_FINNHUB_API_KEY;

const fetchMarketNews = async (category = 'general') => {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/news?category=${category}&token=${apiKeyFinnhub}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching market news:', error);
    return [];
  }
};

const fetchCompanyNews = async (symbol, fromDate, toDate) => {
  try {
    const response = await axios.get('https://finnhub.io/api/v1/company-news', {
      params: {
        symbol: symbol,
        from: fromDate,
        to: toDate,
        token: apiKeyFinnhub,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching company news:', error);
    return [];
  }
};

const NewsComponentFinnhub = () => {
  const [marketNews, setMarketNews] = useState([]);
  const [companyNews, setCompanyNews] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const articlesPerPage = 25;

  useEffect(() => {
    const getMarketNews = async () => {
      const news = await fetchMarketNews();
      setMarketNews(news);
    };

    getMarketNews();
  }, []);
    const getCurrentDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Set toDate state with the current date when component mounts
    useState(() => {
      setToDate(getCurrentDate());
    }, []); //
  const handleSymbolChange = (e) => setSymbol(e.target.value);
  const handleFromDateChange = (e) => setFromDate(e.target.value);
  const handleToDateChange = (e) => setToDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const news = await fetchCompanyNews(symbol, fromDate, toDate);
    setCompanyNews(news.slice(0, articlesPerPage));
    setCurrentPage(1);
    setTotalPages(Math.ceil(news.length / articlesPerPage));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * articlesPerPage;
    setCompanyNews(companyNews.slice(startIndex, startIndex + articlesPerPage));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Left column for Market News */}
      <div className="lg:col-span-2">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 p-4 bg-slate-600 text-center text-white">Market News</h2>
          <div className="grid grid-cols-2 gap-4">
            {marketNews.length === 0 && <p>No market news available.</p>}
            {marketNews.map((news) => (
              <div key={news.id} className="flex mb-4">
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.headline}
                    className="mr-4 rounded-lg"
                    style={{ maxWidth: '20%', maxHeight: '20%' }}
                  />
                )}
                <div>
                  <a href={news.url} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className="text-lg font-semibold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">{news.source} - {new Date(news.datetime * 1000).toLocaleDateString()}</p>
                    <p className="mt-2">{news.summary}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column for Company News */}
      <div className="lg:col-span-1">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 p-4 bg-slate-600 text-center text-white">Company News</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block mb-2">
              Symbol:
              <input
                type="text"
                value={symbol}
                onChange={handleSymbolChange}
                className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                style={{ border: '1px solid lightgray', padding: '0.5rem' }}
              />
            </label>
            <label className="block mb-2">
              From Date:
              <input
                type="date"
                value={fromDate}
                onChange={handleFromDateChange}
                className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                style={{ border: '1px solid lightgray', padding: '0.5rem' }}
              />
            </label>
            <label className="block mb-2">
              To Date:
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                style={{ border: '1px solid lightgray', padding: '0.5rem' }}
              />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Fetch News</button>
          </form>
          {companyNews.length === 0 && <p>No company news available.</p>}
          <ul>
            {companyNews.map((news) => (
              <li key={news.id} className="mb-4">
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-lg font-semibold">{news.headline}</h3>
                  <p className="text-sm text-gray-600">{news.source} - {new Date(news.datetime * 1000).toLocaleDateString()}</p>
                  {news.image && <img src={news.image} alt={news.headline} className="mt-2 rounded-lg" style={{ width: '100%' }} />}
                  <p className="mt-2">{news.summary}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <i className="fas fa-arrow-left mr-2"></i>
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponentFinnhub;
