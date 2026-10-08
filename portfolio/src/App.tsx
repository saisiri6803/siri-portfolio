import React from "react";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Hero/HeroSection";
import { ProjectsSection } from "./components/Projects/Projects";
import { AboutSection } from "./components/About/About";
import { ContactSection } from "./components/Contact/Contact";
import { useThemeToggle } from "./hooks/useTheme";
import { EducationSection } from "./components/Education/Education";
import { ExperienceSection } from "./components/Experience/Experience";
import { SkillsSection } from "./components/Skills/Skills";

export function App() {
  const { dark, toggleDark } = useThemeToggle();

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
        },

        typography: {
          fontFamily: "Inter, sans-serif",
        },
      }),
    [dark]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <div
        className={`app ${
          dark ? "app--dark" : ""
        }`}
      >
        <Header
          dark={dark}
          toggleDark={toggleDark}
        />

       <main>
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <ExperienceSection />
  <SkillsSection/>
  <EducationSection />
  <ContactSection />
</main>
      </div>
    </ThemeProvider>
  );
}

export default App;