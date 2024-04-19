import React, { useState, useEffect } from "react";
import jsonData from "../data/reviews_data.json";

export default function DisplayReviews() {
  const [data, setData] = useState(jsonData);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="container mx-auto py-4 px-8 flex items-center justify-between">
          <h1 className="text-cyan-700 text-4xl font-bold">Analytics Data</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-16 px-8 flex flex-col items-center">
        {/* Render analytics data */}
        <ul className="mt-4">
          {data.map(item => (
            // Check if any required fields are null
            item.analytics && item.analytics.length > 0 && item.analytics[0].category && item.analytics[0].topic && item.analytics[0].sentiment ? (
              <li className="mb-8 mt-7 max-w-xl rounded-xl overflow-hidden shadow-lg bg-slate-100" key={item.review_id}>
                <h2 className="px-3 py-3 text-2xl font-semibold mb-3">{item.reviewer_name}</h2>
                <div className="">
                  <p className="px-3 py-3">
                    <b className="text-emerald-700">Sentence</b>: {item.analytics[0].sentences}
                  </p>
                  <p className="px-3 py-3 mb-3">
                    <b className="text-cyan-700">Sentiment</b>: {item.analytics[0].sentiment}</p>
                  {/* Additional fields from analytics object can be rendered here */}
                </div>
              </li>
            ) : null // If any required field is null, skip rendering the list item
          ))}
        </ul>
      </main>
    </div>
  );
}
