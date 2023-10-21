import { useState, useEffect } from 'react';
import Button from '../../shared/ui/Button/Button';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light',
    );

    useEffect(() => {
        if (theme === 'Dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
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
