import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import './style.scss';

const DarkModeToggler = () => {
  const onToggleTheme = ({e, toggleTheme}) => {
    toggleTheme(e.target.checked ? 'light' : 'dark');
  }
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <label id="switch" className="switch">
          <input id="slider" 
            type="checkbox" 
            onChange={e => onToggleTheme({e, toggleTheme})}
            checked={theme === 'light'}/>
          <span className="slider round"></span>
          </label>        
        </>
      )}
    </ThemeToggler>
  )
}

export default DarkModeToggler;