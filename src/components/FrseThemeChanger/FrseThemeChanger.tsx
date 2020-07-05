import React from 'react';
import cs from 'classnames';
import { PortfolioThemes } from '../../../models/model';
import { FrseSwitcher } from '../common';
import './FrseThemeChanger.less';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';

interface IFrseThemeChanger {
  theme: PortfolioThemes;
  className?: string;
  onChange: () => void;
}

const FrseThemeChanger: React.FC<IFrseThemeChanger> = (props) => {
  const { className, theme, onChange } = props;
  const changerClass = cs('frse-theme-changer', theme === 'light' ? 'frse-light' : 'frse-dark', className);

  return (
    <FrseSwitcher className={changerClass} onChange={onChange} theme={theme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </FrseSwitcher>
  );
};

export default FrseThemeChanger;
