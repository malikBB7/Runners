import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VerticalNav from '../components/VerticalNav';
import Services from '../components/Services';
import Stories from '../components/Stories';
import Heritage from '../components/Heritage';
import Projects from '../components/Projects';
import AboutUs from '../components/About us';  // Fix the import name

export default function HomePage() {
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'stories', name: 'Stories' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'projects', name: 'Projects' },
    { id: 'aboutus', name: 'About Us' }  // Add the About Us section
  ];

  return (
    <div>
      <Navbar />

      <VerticalNav sections={sections} />

      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="stories"><Stories /></div>
      <div id="heritage"><Heritage /></div>
      <div id="projects"><Projects /></div>
      <div id="aboutus"><AboutUs /></div>
    </div>
  );
}
