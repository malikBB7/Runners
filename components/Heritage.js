import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Heritage() {
  const heritage = [
    { title: 'R&D', image: '/images/heritage1.jpg', link: '/rd' },
    { title: 'Core Values', image: '/images/heritage2.jpg', link: '/core-values' },
    { title: 'Development', image: '/images/heritage3.jpg', link: '/development' },
    { title: 'Data Security & Privacy', image: '/images/heritage4.jpg', link: '/data-security' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 3; // Number of images visible at once

  // Handle next and previous button clicks
  const handleNext = () => {
    if (currentIndex < heritage.length - imagesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      id="heritage"
      className="py-16 bg-gradient-to-r from-blue-900 via-blue-500 to-cyan-500 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Heritage</h2>

        <div className="relative">
          {/* Left Arrow Symbol */}
          <button
            onClick={handlePrev}
            className={`absolute left-8 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-4xl font-bold opacity-50 hover:opacity-100 ${currentIndex === 0 ? 'hidden' : ''}`}
          >
            &lt;
          </button>

          {/* Image Gallery with Left and Right Gap */}
          <div className="flex overflow-hidden mx-12"> {/* Added left and right gap */}
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(currentIndex * 100) / imagesToShow}%)`,
              }}
            >
              {heritage.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-1/3 px-2" // Reduced gap between images
                >
                  <Link href={item.link}>
                    <div className="relative group rounded-md overflow-hidden cursor-pointer">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}  // Reduced image width
                        height={250} // Reduced image height
                        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-80 transition-all">
                        <div className="absolute bottom-4 left-4 transition-all transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-4">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <span className="block mt-2 text-yellow-500">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Symbol */}
          <button
            onClick={handleNext}
            className={`absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-4xl font-bold opacity-50 hover:opacity-100 ${currentIndex === heritage.length - imagesToShow ? 'hidden' : ''}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
