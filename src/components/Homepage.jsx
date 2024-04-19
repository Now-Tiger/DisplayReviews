import React from 'react';
import DisplayReviews from './Reviews';

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="container mx-auto py-4 px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href={DisplayReviews} className="text-gray-600 hover:text-gray-800">Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-16 px-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8">Latest Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example post cards */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h3 className="text-xl font-semibold mb-2">Post Title</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h3 className="text-xl font-semibold mb-2">Post Title</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h3 className="text-xl font-semibold mb-2">Post Title</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-16 py-4 w-full">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
