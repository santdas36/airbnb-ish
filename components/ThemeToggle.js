import { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";
import styled from "styled-components";

const ThemeToggle = ({ text, icon }) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      window.localStorage.setItem("airbnbTheme", "dark");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("airbnbTheme", "light");
    }
  }, [isDark]);

  return (
    <Container className="themeToggle" onClick={() => setIsDark(!isDark)}>
      {icon && (
        <> {isDark ? <Sun className="sun" /> : <Moon className="moon" />} </>
      )}
      {text && "Switch Theme"}
    </Container>
  );
};

export default ThemeToggle;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
`;
