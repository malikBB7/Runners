import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const router = useRouter();

  // Scroll effect to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownContent = {
    "Services": [
      { name: "Cloud Technology", link: "/contact-us" },
      { name: "IoT", link: "/contact-us" },
      { name: "Software Development", link: "/contact-us" },
      { name: "AI", link: "/contact-us" },
    ],
    "Company": [
      { name: "About us", component: "AboutUs" },
      { name: "Our Team", link: "/test" },
      { name: "Resources", component: "Heritage" },
    ]
  };

  const staticLinks = [
    { name: "Careers", link: "/careers" },
    { name: "Our Work", component: "Services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const isHomePage = router.pathname === '/';

  const handleNavigation = (target) => {
    if (isHomePage) {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/').then(() => {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isHomePage && !isScrolled ? 'bg-transparent text-white' : 'bg-black text-white shadow-md'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold cursor-pointer select-none">
          <span className="hover:cursor-pointer">Runners</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {Object.keys(dropdownContent).map((menu, index) => (
            <li
              key={index}
              className="relative dropdown"
              onClick={() => setDropdownOpen(dropdownOpen === menu ? null : menu)}
            >
              <span className="cursor-pointer">{menu}</span>
              {dropdownOpen === menu && (
                <div className="absolute left-0 w-48 bg-black text-white p-4 mt-2 rounded-lg shadow-lg">
                  <ul className="space-y-2">
                    {dropdownContent[menu].map((item, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:text-yellow-500 transition-all"
                      >
                        {item.link ? (
                          <Link href={item.link}>{item.name}</Link>
                        ) : (
                          <button onClick={() => handleNavigation(item.component.toLowerCase())}>
                            {item.name}
                          </button>
                        )}
                        {i < dropdownContent[menu].length - 1 && <hr className="border-white my-1" />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          {staticLinks.map((link, index) => (
            <li key={index}>
              {link.link ? (
                <Link href={link.link}>
                  <span className="hover:text-yellow-500 transition-all cursor-pointer">{link.name}</span>
                </Link>
              ) : (
                <button onClick={() => handleNavigation(link.component.toLowerCase())}>
                  <span className="hover:text-yellow-500 transition-all cursor-pointer">{link.name}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
