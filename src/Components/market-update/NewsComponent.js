import React from 'react';

const NewsComponent = ({ news }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
      <p className="text-gray-600 mb-2">{news.snippet}</p>
      <div className="flex items-center justify-between">
        <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
        <p className="text-amber-500">{news.source}</p>
      </div>
    </div>
  );
};

export default NewsComponent;