import Button from "../../shared/ui/Button/Button";
import { useState } from "react";

export default function ThemeSwitcher() {

  const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light");

  function handleButtonThemeSwitch() {

    if (theme==="Dark") {
      console.log("light")
      document.body.classList.remove("dark");
      setTheme("Light")
    } else {
      console.log("dark")
      document.body.classList.add("dark")
      setTheme("Dark")
    }
  }


  return (
    <Button className="theme-switcher" onClick={handleButtonThemeSwitch}>{theme}</Button>
  )
}
