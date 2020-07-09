// import App from 'next/app';
import { useState, Profiler } from 'react';
import { FrsePortfolio, FrseThemeChanger } from '../src/components';
import '../main.less';
import { PortfolioThemes } from '../models/model';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
 */
const FrseApp = () => {
  const [theme, setTheme] = useState<PortfolioThemes>('light');

  const onRenderCallback = (id?: string, phase?: "mount" | "update", actualDuration?: number, baseDuration?: number, startTime?: number, commitTime?: number, interactions?: any ) => {
    console.log('RENDER', phase);
  }

  return (
    <>
      <Profiler id="App" onRender={onRenderCallback}>
        <FrsePortfolio theme={theme} />
        <FrseThemeChanger theme={theme} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </Profiler>
    </>
  );
};

export default FrseApp;
