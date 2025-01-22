import { useState } from 'react';

export default function RDTeam() {
  return (
    <div id="rd-team" className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-center mb-8 text-white">R&D Team</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-200">
          At our IoT startup company, we have a dedicated R&D team that is constantly testing new technologies and improving our IoT devices to meet the evolving needs of our clients.
        </p>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="text-lg leading-relaxed text-gray-200">
            <h3 className="text-3xl font-semibold mb-4 text-blue-100">Innovation at the Core</h3>
            <p className="mb-4 text-gray-300">
              Our R&D team stays up-to-date with the latest industry trends and technological advancements to ensure that our solutions are always at the cutting edge. We focus on creating solutions that are not just theoretical but also practical and effective.
            </p>
            <p className="mb-4 text-gray-300">
              Addressing real-time, ground-level problems is crucial to us, and we believe in delivering results that matter. Our team works tirelessly to craft solutions that evolve with the demands of the industry, keeping our clients' needs at the forefront of everything we do.
            </p>
            <p className="mb-4 text-gray-300">
              Our solutions are always developed with a customer-centric approach. We aim to provide efficiency, scalability, and reliability in every solution. Whether you're looking for long-term solutions or quick innovations, our team delivers.
            </p>
          </div>

          {/* Right Column: Image Section */}
          <div className="relative">
            <img
              src="/images/rd.jpg"
              alt="R&D Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-1/2 left-0 right-0 text-center text-white transform -translate-y-1/2">
              <h4 className="text-4xl font-semibold text-blue-200">Constant Innovation</h4>
              <p className="text-lg text-gray-300">Fostering creativity, pushing boundaries, and delivering the future today.</p>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-blue-100">Our Approach</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* First Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Customer-Centric Approach</h4>
              <p className="text-gray-600">We always prioritize our client's needs and deliver results that are tailored for them.</p>
            </div>
            {/* Second Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Cutting-Edge Technologies</h4>
              <p className="text-gray-600">Leveraging the latest tech to build reliable, scalable, and efficient solutions.</p>
            </div>
            {/* Third Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Industry Expertise</h4>
              <p className="text-gray-600">Our team has extensive experience in solving industry-specific challenges.</p>
            </div>
            {/* Fourth Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Scalable Solutions</h4>
              <p className="text-gray-600">Our R&D team builds solutions that grow with your needs and adapt to the future.</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-200">
            Join us in creating innovative solutions that will shape the future of IoT. Our R&D team is always ready to take on the next big challenge.
          </p>
        </div>
      </div>
    </div>
  );
}
