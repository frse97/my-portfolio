// import App from 'next/app';
import { useState, Profiler, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioThemes, SettingModes } from '../models/model';
import { Nav, Header, Footer, FrsePortfolio, FrseThemeChanger, FrseSettings } from '../src';
import '../styles/main.less';
import { IFrseNavItemProps } from '../src/components/FrseNav/FrseNavItem';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
 */
const FrseApp = () => {
  const [theme, setTheme] = useState<PortfolioThemes>('light');
  const [settingsMode, setSettingsMode] = useState<SettingModes>('collapsed');

  const settingsClassName = settingsMode === 'collapsed' ? 'sett-collapsed' : 'sett-expanded';
  const headerClassName = settingsMode === 'collapsed' ? 'header-collapsed' : 'header-expanded';
  const settingsVisibility = settingsMode === 'collapsed' ? 'none' : 'flex';

  const onRenderCallback = (
    id?: string,
    phase?: 'mount' | 'update',
    actualDuration?: number,
    baseDuration?: number,
    startTime?: number,
    commitTime?: number,
    interactions?: any
  ) => {
    if (phase === 'mount') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const handleOnChange = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };
  const handleSettingModeChange = (): void => {
    if (settingsMode === 'collapsed') {
      setSettingsMode('expanded');
    } else {
      setSettingsMode('collapsed');
    }
  };

  const navItems: IFrseNavItemProps[] = [
    {
      id: 'frse-github',
      type: 'external',
      href: 'https://github.com/frse97/',
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      id: 'frse-linkedin',
      type: 'external',
      href: 'https://www.linkedin.com/in/sebastian-fries-7321a01a3/',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
  ];

  return (
    <>
      <Profiler id="App" onRender={onRenderCallback}>
        <Header className={headerClassName}>
          <div className="frse-header-block">
            <Nav items={navItems} />
            <FrseSettings className={settingsClassName} onClick={handleSettingModeChange} />
          </div>
          <div className="frse-header-block" style={{display: settingsVisibility}}>
            <FrseThemeChanger theme={theme} onChange={handleOnChange} />
          </div>
        </Header>
        <FrsePortfolio />
        <Footer />  
      </Profiler>
    </>
  );
};

export default FrseApp;
