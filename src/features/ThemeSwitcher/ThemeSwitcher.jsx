import { useState, useEffect } from 'react';
import Button from '../../shared/ui/Button/Button';

export default function ThemeSwitcher() {
    let initialTheme = '';
    const localStorageTheme = localStorage.getItem('theme') || null;
    if (localStorageTheme && (localStorageTheme === 'Dark' || localStorageTheme === 'Light')) {
        initialTheme = localStorageTheme;
    } else {
        initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light';
    }
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        if (theme === 'Dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleButtonThemeSwitch = () => {
        setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
    };

    return (
        <Button
            className={`theme-switcher ${theme}`}
            onClick={handleButtonThemeSwitch}
        >
            {theme}
        </Button>
    );
}
