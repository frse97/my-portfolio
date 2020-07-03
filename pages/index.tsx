// import App from 'next/app';
import { useState } from 'react';
import { FrsePortfolio, FrseThemeChanger } from '../src/components';
import '../main.less';
import { PortfolioThemes } from './model';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
 */
const FrseApp = () => {
  const [theme, setTheme] = useState<PortfolioThemes>('light');

  return (
    <>
      <FrsePortfolio theme={theme} />
      <FrseThemeChanger theme={theme} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    </>
  );
};

export default FrseApp;
