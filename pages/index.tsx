// import App from 'next/app';
import { useState, Profiler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioThemes } from '../models/model';
import { Nav, Header, Footer, FrsePortfolio, FrseThemeChanger } from '../src';
import '../styles/main.less';
import { IFrseNavItemProps } from '../src/components/FrseNav/FrseNavItem';

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
    if(phase === 'mount'){
      document.documentElement.setAttribute('data-theme', 'light'); 
    }
  };

  const handleOnChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const navItems: IFrseNavItemProps[] = [
    {
      id: 'frse-github',
      type: 'external',
      href: "https://github.com/frse97/",
      icon: <FontAwesomeIcon icon={faGithub} />
    },
    {
      id: 'frse-linkedin',
      type: 'external',
      href: "https://www.linkedin.com/in/sebastian-fries-7321a01a3/",
      icon: <FontAwesomeIcon icon={faLinkedin} />
    }
  ]

  return (
    <>
      <Profiler id="App" onRender={onRenderCallback}>
        <Header>
          <Nav items={navItems} />
        </Header>
        <FrsePortfolio />
        <Footer />
        <FrseThemeChanger theme={theme} onChange={handleOnChange} />
      </Profiler>
    </>
  );
};

export default FrseApp;
