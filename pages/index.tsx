// import App from 'next/app';
import { useState, Profiler } from 'react';

import '../styles/main.less';
import { PortfolioThemes } from '../models/model';
import { Nav, Header, Footer, FrsePortfolio, FrseThemeChanger } from '../src';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
 */
const FrseApp = () => {
  const [theme, setTheme] = useState<PortfolioThemes>('light');

  const onRenderCallback = (
    id?: string,
    phase?: 'mount' | 'update',
    actualDuration?: number,
    baseDuration?: number,
    startTime?: number,
    commitTime?: number,
    interactions?: any
  ) => {
    console.log('RENDER', phase);
  };

  const handleOnChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <>
      <Profiler id="App" onRender={onRenderCallback}>
        <Header>
          <Nav />
        </Header>
        <FrsePortfolio />
        <Footer />
        <FrseThemeChanger theme={theme} onChange={handleOnChange} />
      </Profiler>
    </>
  );
};

export default FrseApp;
