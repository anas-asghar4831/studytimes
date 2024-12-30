import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">
        Welcome to Study Times
      </h1>
      <button className="mt-8 px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Page;
