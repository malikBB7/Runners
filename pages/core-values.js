import { useState } from 'react';

export default function BoardOfDirectors() {
  return (
    <div id="board-of-directors" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header Section with Light Teal Background */}
        <div className="bg-gray-600 p-12 rounded-lg shadow-xl mb-8">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-white">
            Board of Directors Involvement
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-200">
            At our IoT startup company, we believe in having a diverse and talented team of professionals who bring unique skills and expertise to the table. That's why our board of directors not only has strong management skills but also sound in technical knowledge related to device hardware, networking, programming, and all other aspects of understanding where our devices fail to function properly.
          </p>
        </div>

        {/* Description Section with Dark Blue Background */}
        <div className="bg-blue-600 text-white p-12 rounded-lg shadow-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Description */}
            <div className="text-lg leading-relaxed">
              <h3 className="text-3xl font-semibold mb-4 text-teal-300">Active Involvement in Operations</h3>
              <p className="mb-4 text-gray-300">
                Our board of directors is actively involved in the day-to-day operations of our company, and they are available to meet with clients and address any concerns they may have. They bring a wealth of experience and knowledge to our company, and they are committed to ensuring that we deliver the highest quality IoT solutions to our clients.
              </p>
              <p className="mb-4 text-gray-300">
                Having a board of directors with technical expertise is essential in the IoT industry, where the devices we develop are complex and require a deep understanding of hardware, software, and networking. Our board of directors ensures that we are always up-to-date with the latest technologies and industry trends, allowing us to provide our clients with the most innovative and effective solutions.
              </p>
              <p className="mb-4 text-gray-300">
                We pride ourselves on our commitment to excellence and our ability to deliver solutions that meet our clients' needs. With a board of directors that is both technically proficient and experienced in management, we are well-equipped to address any challenges that may arise and provide our clients with the highest quality IoT solutions.
              </p>
            </div>

            {/* Right Column - Image Section */}
            <div className="relative">
              <img
                src="/images/board1.jpg"
                alt="Board of Directors"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <div className="absolute top-1/2 left-0 right-0 text-center text-white transform -translate-y-1/2">
                <h4 className="text-4xl font-semibold text-teal-200">Experienced Leadership</h4>
                <p className="text-lg text-gray-300">Guiding our IoT innovations with expertise and vision.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Section with a Different Color */}
        <div className="bg-gray-100 p-12 rounded-lg shadow-xl mb-8">
          <h3 className="text-3xl font-semibold text-center mb-10 text-teal-700">Our Leadership in Action</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* First Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Technical Expertise</h4>
              <p className="text-gray-600">Our board brings deep technical expertise in IoT hardware, software, and networking to ensure that our devices function optimally.</p>
            </div>
            {/* Second Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Industry Knowledge</h4>
              <p className="text-gray-600">The board stays up-to-date with the latest industry trends, helping us offer the most innovative and effective IoT solutions.</p>
            </div>
            {/* Third Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Client-Centric Approach</h4>
              <p className="text-gray-600">Our directors are committed to understanding and addressing our clients' needs, ensuring we provide solutions that make a real impact.</p>
            </div>
            {/* Fourth Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Experienced Leadership</h4>
              <p className="text-gray-600">With decades of experience, our board of directors provides strong leadership to steer the company toward success.</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400">
            With our board of directors' active involvement and technical proficiency, we are committed to delivering the highest quality IoT solutions for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
