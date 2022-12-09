'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="w-8 h-8 text-yellow-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="w-8 h-8 text-gray-900"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default DarkModeButton;
