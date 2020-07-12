import React from 'react';
import cs from 'classnames';
import { PortfolioThemes } from '../../../models/model';
import { FrseSwitcher } from '../common';
import './FrseThemeChanger.less';
import Sun from '../FrseIcons/Sun';
import Moon from '../FrseIcons/Moon';

interface IFrseThemeChanger {
  theme?: PortfolioThemes;
  className?: string;
  onChange: () => void;
}

const FrseThemeChanger: React.FC<IFrseThemeChanger> = (props) => {
  const { className, theme, onChange } = props;
  const changerClass = cs('frse-theme-changer', className);

  return (
    <FrseSwitcher className={changerClass} onChange={onChange} theme={theme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </FrseSwitcher>
  );
};

export default FrseThemeChanger;
