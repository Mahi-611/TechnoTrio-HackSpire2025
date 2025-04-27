import { useEffect, useState } from 'react';
import axios from 'axios';

const AnimatedBackground = () => {
  const [backgroundConfig, setBackgroundConfig] = useState({ themes: [], animationSpeed: '', defaultTheme: '' });

  useEffect(() => {
    // Fetch animated background configuration
    axios.get('/api/animated-background').then((response) => {
      setBackgroundConfig(response.data.backgroundConfig);
    });
  }, []);

  const currentTheme = backgroundConfig.themes.find((theme) => theme.name === backgroundConfig.defaultTheme);

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `linear-gradient(135deg, ${currentTheme?.colors.join(', ')})`,
        animation: `${backgroundConfig.animationSpeed} infinite alternate`,
      }}
    ></div>
  );
};

export default AnimatedBackground;