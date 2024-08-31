import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDarkMode } from '@/contexts/DarkModeContext';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';

const HomePage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <HeroSection isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <HowItWorks isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;
