import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from '../Components/market-update/NewsComponent';

const MarketUpdate = () => {
  const [symbol, setSymbol] = useState('');
  const [region, setRegion] = useState('us');
  const [companyNews, setCompanyNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [loadingCompanyNews, setLoadingCompanyNews] = useState(false);
  const [loadingGeneralNews, setLoadingGeneralNews] = useState(false);
  const [errorCompanyNews, setErrorCompanyNews] = useState(null);
  const [errorGeneralNews, setErrorGeneralNews] = useState(null);

  useEffect(() => {
    const fetchGeneralNews = async () => {
      setLoadingGeneralNews(true);
      try {
            const generalNewsResponse = await axios.get('https://www.searchapi.io/api/v1/search', {
              params: {
                api_key: 'aezV3kcrvDVvspYnHhkDkywv', // Use environment variable for API key
                engine: 'google_news',
                q: 'market news',
                location: region,
                hl: 'en',
              },
            });

        setGeneralNews(generalNewsResponse.data.organic_results);
 
      } catch (error) {
        console.log(error.message)
        setErrorGeneralNews(error.message);
      } finally {
        setLoadingGeneralNews(false);
      }
    };

    fetchGeneralNews();
  }, [region]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingCompanyNews(true);
    try {
      debugger
          const companyNewsResponse = await axios.get('https://www.searchapi.io/api/v1/search', {
            params: {
              api_key: 'aezV3kcrvDVvspYnHhkDkywv', // Use environment variable for API key
              engine: 'google_news',
              q: symbol +' news',
              location: region,
              hl: 'en',
            },
          });
          debugger

      setCompanyNews(companyNewsResponse.data.organic_results);
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
            <button className="tab tab-bordered px-4 py-2">NSE</button>
            <button className="tab tab-bordered px-4 py-2">BSE</button>
            <button className="tab tab-bordered px-4 py-2">Global Indices</button>
          </div>
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="w-3/4 px-4">
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4 text-center">General News</h1>
            <div className="mb-8">
              {loadingGeneralNews && <div>Loading...</div>}
              {errorGeneralNews && <div>Error: {errorGeneralNews}</div>}
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
                placeholder="Enter stock symbol" 
                required 
                className="border px-4 py-2 mb-2 w-full"
              />
              <select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)} 
                className="border px-4 py-2 mb-2 w-full"
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                {/* Add more regions as needed */}
              </select>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Get Company News</button>
            </form>
            {loadingCompanyNews && <div>Loading...</div>}
            {errorCompanyNews && <div>Error: {errorCompanyNews}</div>}
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








//// src/components/MarketUpdate.js
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';

//const MarketUpdate = () => {
//  const [symbol, setSymbol] = useState('');
//  const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(false);
//  const [error, setError] = useState(null);

//  const fetchData = async () => {
//    setLoading(true);
//    setError(null);
//    try {
//      const response = await axios.get('/api/market-update', {
//        params: { symbol }
//      });
//      setData(response.data);
//    } catch (error) {
//      setError(error);
//    } finally {
//      setLoading(false);
//    }
//  };

//  const handleSubmit = (event) => {
//    event.preventDefault();
//    fetchData();
//  };

//  return (
//    <div className="flex flex-col min-h-screen">
//      <div className="flex-grow">
//        <div className="bg-gray-100 py-4">
//          <div className="container mx-auto flex justify-center">
//            <div className="tabs flex space-x-4">
//              <button className="tab tab-bordered px-4 py-2">NSE</button>
//              <button className="tab tab-bordered px-4 py-2">BSE</button>
//              <button className="tab tab-bordered px-4 py-2">Global Indices</button>
//            </div>
//          </div>
//        </div>
//        <div className="container mx-auto py-8">
//          <h1 className="text-2xl font-bold mb-4">Enter the Stock</h1>
//          <form onSubmit={handleSubmit} className="mb-4">
//            <input 
//              type="text" 
//              value={symbol} 
//              onChange={(e) => setSymbol(e.target.value)} 
//              placeholder="Enter stock symbol" 
//              required 
//              className="border px-4 py-2 mr-4"
//            />
//            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Get Data</button>
//          </form>
//          {loading && <div>Loading...</div>}
//          {error && <div>Error: {error.message}</div>}
//          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//        </div>
//      </div>
//    </div>
//  );
//};

//export default MarketUpdate;
