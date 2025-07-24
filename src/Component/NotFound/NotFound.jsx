import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4">
      <div className="text-center  bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-md backdrop-blur-md">
        <h1 className="text-6xl font-extrabold text-red-500 mb-3">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 btn btn-primary rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
