import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const slides = [
    { text: 'Welcome to Runners', image: '/images/slide1.jpg', link: '/welcome' },
    { text: 'Empowering Business', image: '/images/slide2.jpg', link: '/empowering' },
    { text: 'Capabilities that Drive us Success', image: '/images/slide3.jpg', link: '/capabilities' },
  ];
  const totalSlides = slides.length;
  const timeoutRef = useRef(null);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(handleNext, 4000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Match this duration with your CSS transition duration
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute inset-0 flex transition-transform duration-700 ease-out ${isTransitioning ? '' : 'transition-none'}`}
        style={{ transform: `translateX(-${(currentSlide % totalSlides) * 100}%)` }}
      >
        {slides.concat(slides[0]).map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white animate-fadeIn">
                <h1 className="text-5xl font-semibold tracking-wide mb-6 drop-shadow-md">
                  {slide.text}
                </h1>
                <button
                  onClick={() => router.push(slide.link)}
                  className="mt-4 px-8 py-3 bg-white text-black font-medium rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-5xl font-light opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        &gt;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide % totalSlides === index ? 'bg-white scale-125' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}