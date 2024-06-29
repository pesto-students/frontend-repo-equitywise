import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from '../Components/market-update/NewsComponent';

const MarketUpdate = () => {
  const [symbol, setSymbol] = useState('');
  const [region, setRegion] = useState('us');
  const [companyNews, setCompanyNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [financeData, setFinanceData] = useState([]);
  const [loadingCompanyNews, setLoadingCompanyNews] = useState(false);
  const [loadingGeneralNews, setLoadingGeneralNews] = useState(false);
  const [loadingFinanceData, setLoadingFinanceData] = useState(false);
  const [errorCompanyNews, setErrorCompanyNews] = useState(null);
  const [errorGeneralNews, setErrorGeneralNews] = useState(null);
  const [errorFinanceData, setErrorFinanceData] = useState(null);

  useEffect(() => {
    const fetchGeneralNews = async () => {
      setLoadingGeneralNews(true);
      try {
        const generalNewsResponse = await axios.get(process.env.REACT_APP_MARKET_UPDATE_API_URL, {
          params: {
            api_key: process.env.REACT_APP_GOOGLE_NEWS_API_KEY,
            engine: 'google_news',
            q: 'market news',
            location: region,
            hl: 'en',
          },
        });

        setGeneralNews(generalNewsResponse.data.organic_results || []);
      } catch (error) {
        console.log(error.message);
        setErrorGeneralNews(error.message);
      } finally {
        setLoadingGeneralNews(false);
      }
    };

    fetchGeneralNews();
  }, [region]);

  useEffect(() => {
    const fetchFinanceData = async () => {
      setLoadingFinanceData(true);
      try {
        const financeResponse = await axios.get(process.env.REACT_APP_MARKET_UPDATE_API_URL, {
          params: {
            api_key: process.env.REACT_APP_GOOGLE_NEWS_API_KEY,
            engine: 'google_finance',
            q: 'EUR-USD',
          },
        });

        setFinanceData(financeResponse.data.organic_results || []);
      } catch (error) {
        console.log(error.message);
        setErrorFinanceData(error.message);
      } finally {
        setLoadingFinanceData(false);
      }
    };

    fetchFinanceData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingCompanyNews(true);
    try {
      const companyNewsResponse = await axios.get(process.env.REACT_APP_MARKET_UPDATE_API_URL, {
        params: {
          api_key: process.env.REACT_APP_GOOGLE_NEWS_API_KEY,
          engine: 'google_news',
          q: symbol + ' news',
          location: region,
          hl: 'en',
        },
      });

      setCompanyNews(companyNewsResponse.data.organic_results || []);
    } catch (error) {
      setErrorCompanyNews(error.message);
    } finally {
      setLoadingCompanyNews(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center">
          <div className="tabs flex space-x-4">
            {loadingFinanceData && <div>Loading...</div>}
            {errorFinanceData && <div>Error: {errorFinanceData}</div>}
            {!loadingFinanceData && !errorFinanceData && financeData && financeData.length > 0 && (
              <>
                {financeData.map((data, index) => (
                  <button key={index} className="tab tab-bordered px-4 py-2">
                    {data.title} {/* Adjust based on the API response structure */}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="w-3/4 px-4">
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4 text-center">General News</h1>
            <div className="mb-8">
              {loadingGeneralNews && <div>Loading...</div>}
              {errorGeneralNews && <div>Error fetching general news: {errorGeneralNews}</div>}
              {!loadingGeneralNews && !errorGeneralNews && (
                <div className="grid grid-cols-2 gap-4">
                  {generalNews.map((news, index) => (
                    <NewsComponent key={index} news={news} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-l border-gray-300"></div>
        <div className="w-1/4 px-4">
          <div className="container mx-auto py-8">
            <h2 className="text-xl font-bold mb-4 text-center">Company News</h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <input 
                type="text" 
                value={symbol} 
                onChange={(e) => setSymbol(e.target.value)} 
                placeholder="Enter Search Criteria" 
                required 
                className="border px-4 py-2 mb-2 w-full"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Get Company News</button>
            </form>
            {loadingCompanyNews && <div>Loading...</div>}
            {errorCompanyNews && <div>Error fetching company news: {errorCompanyNews}</div>}
            {!loadingCompanyNews && !errorCompanyNews && (
              <>
                {companyNews.map((news, index) => (
                  <NewsComponent key={index} news={news} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketUpdate;