import Link from 'next/link';

export default function Stories() {
  const stories = [
    {
      title: 'Product & Designs',
      description: 'A glimpse into our innovative product designs and creative process.',
      image: '/images/story1.jpg',
      link: '/product', // Link to the product page
    },
    {
      title: 'Testing Team',
      description: 'Meet our team that ensures product excellence through rigorous testing.',
      image: '/images/story2.jpg',
      link: '/test', // Link to the test page
    },
  ];

  return (
    <div id="stories" className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-left text-3xl font-semibold mb-4">Stories at Runners</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Two Vertical Cards */}
          <div className="flex flex-col lg:w-1/3 space-y-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group bg-transparent shadow-md rounded-md overflow-hidden transition-transform transform cursor-pointer"
              >
                <div className="relative">
                  {/* Image with smooth zoom-in and zoom-out effect */}
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-40 w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  {/* Link to the individual page */}
                  <Link href={story.link}>
                    <h3 className="text-lg font-semibold group-hover:text-blue-500">{story.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Large Image with Card Structure */}
          <div className="lg:w-2/3">
            <div className="group bg-transparent shadow-md rounded-md overflow-hidden transition-transform transform cursor-pointer">
              <div className="relative">
                {/* Large Image with smooth zoom-in and zoom-out effect */}
                <img
                  src="/images/story3.jpg"
                  alt="Product & Designs"
                  className="rounded-lg shadow-lg object-cover w-full h-full max-h-[400px] transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-center text-white p-4">
                  {/* Link to Product page */}
                  <Link href="/product">
                    <h3 className="text-xl font-semibold">Careers</h3>
                  </Link>
                  <p className="text-base mt-2">A glimpse into our innovative product designs and creative process.</p>
                  {/* Link to Product page */}
                  <Link href="/careers">
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-red-500 transition-colors">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
