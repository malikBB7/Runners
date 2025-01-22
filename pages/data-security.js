import React from 'react';

export default function DataSecurity() {
  return (
    <div className="bg-blue-100 pt-24 pb-12 px-8 rounded-lg shadow-xl"> {/* Added padding top for space between navbar */}
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-semibold text-blue-600 mb-6">Data Security & Privacy</h2>
        
        {/* Description Section */}
        <p className="text-xl text-gray-700 mb-8">
          At our company, we understand the importance of data security and privacy. We adhere to the strictest security measures to ensure our clients' data remains protected at all times. Our security policies are designed to help organizations manage risks effectively and meet regulatory compliance.
        </p>
        
        {/* Key Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <ul className="list-disc text-left text-gray-800 space-y-4">
            <li className="text-lg">Compliant with industry regulations like GDPR and CCPA</li>
            <li className="text-lg">Secure data protection systems with encryption protocols</li>
            <li className="text-lg">Focus on regulatory requirements to protect customer privacy</li>
            <li className="text-lg">Regular audits to ensure continuous data security</li>
            <li className="text-lg">Advanced threat detection and response systems</li>
          </ul>
        </div>

        {/* Footer Section */}
        <p className="text-lg text-gray-600 mt-8">
          Our team is committed to ensuring that your data is always secure and compliant with all relevant regulations. With constant monitoring and timely updates, you can trust us to provide the highest standards of data protection.
        </p>
      </div>
    </div>
  );
}
