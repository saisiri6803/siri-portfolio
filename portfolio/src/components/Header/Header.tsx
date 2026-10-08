import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu, Moon, Sun, X } from "lucide-react";

import { NAV_LINKS } from "../../data/portfolioData";

import "./Header.scss";

interface HeaderProps {
  dark: boolean;
  toggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  dark,
  toggleDark,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav
        className="header__nav"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Sai Sirisha - Home"
        >
          Sai Sirisha
        </a>

        <div className="header__links">
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 && (
                <span
                  className="header__separator"
                  aria-hidden="true"
                >
                  /
                </span>
              )}

              <a
                href={link.href}
                className="header__link"
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>

        <div className="header__actions">
          <IconButton
            aria-label={
              dark
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            onClick={toggleDark}
            className="header__theme-button"
          >
            {dark ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </IconButton>

          <IconButton
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            className="header__menu-button"
          >
            {menuOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </IconButton>
        </div>
      </nav>

      {menuOpen && (
        <div className="header__mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__mobile-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};