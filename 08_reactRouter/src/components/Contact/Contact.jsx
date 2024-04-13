import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6">Fill out the form below to start a conversation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Information</h2>
            <div className="flex items-center mb-4 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="flex items-center mb-4 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span>+44 1234567890</span>
            </div>
            <div className="flex items-center mb-4 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
              <span>info@acme.org</span>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="w-full border-green-900 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full border-gray-900 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border-gray-900 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
