// import App from 'next/app';
import FrsePortfolio from '../src/components/FrsePortfolio/FrsePortfolio';
import cs from 'classnames';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { PortfolioThemes } from './model';
import '../main.less';


/**
 * The <code>`App`</code> is used to render the landing page.
 *
 */
const FrseApp = () => {
  const [theme, setTheme] = useState<PortfolioThemes>('light');
  const changerClass = cs("frse-theme-changer", theme === 'light' ? 'frse-light' : 'frse-dark');

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');

    const doc = document;
    console.log(doc);
  };

  return (
    <>
      <FrsePortfolio theme={theme} />
      <button className={changerClass} onClick={changeTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
      </button>
    </>
  );
};

export default FrseApp;
