import React from 'react';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { PortfolioThemes } from '../../../pages/model';
import { FrseButton } from '../common';
import './FrseThemeChanger.less';

interface IFrseThemeChanger {
  theme: PortfolioThemes;
  className?: string;
  onClick: () => void;
}

const FrseThemeChanger: React.FC<IFrseThemeChanger> = (props) => {
  const { className, theme, onClick } = props;
  console.table('CHANGER PROPS', theme);

  const changerClass = cs('frse-theme-changer', theme === 'light' ? 'frse-light' : 'frse-dark', className);

  return (
    <FrseButton className={changerClass} onClick={onClick}>
      <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
    </FrseButton>
  );
};

export default FrseThemeChanger;
