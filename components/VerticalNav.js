import { useState, useEffect } from 'react';

export default function VerticalNav({ sections }) {
  const [activeSection, setActiveSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the position of the first section (the Hero section)
      const heroSection = document.getElementById(sections[0].id);
      const rect = heroSection.getBoundingClientRect();
      
      // If the Hero section is out of the viewport, show the vertical navbar
      if (rect.bottom <= 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      // Update active section only if navbar is shown
      if (showNav) {
        sections.slice(1).forEach((section, index) => {
          const element = document.getElementById(section.id);
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(index + 1); // Adjust index to match the actual section
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, showNav]);

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 ${showNav ? 'block' : 'hidden'}`}>
      {sections.slice(1).map((section, index) => (
        <div
          key={index + 1} // Ensure unique key for each element
          className={`w-1 h-10 rounded-full cursor-pointer transition-all ${
            activeSection === index + 1 ? 'bg-yellow-500' : 'bg-gray-300'
          }`}
          onClick={() => {
            document.getElementById(section.id).scrollIntoView({
              behavior: 'smooth',
            });
          }}
        />
      ))}
    </div>
  );
}
