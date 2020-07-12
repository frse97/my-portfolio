import React from 'react';
import './FrseNav.less';
import FrseNavItem, { IFrseNavItemProps } from './FrseNavItem';

interface IFrseNavProps {
  items?: IFrseNavItemProps[];
}

const FrseNav: React.FC<IFrseNavProps> = (props) => {
  const { items } = props;
  
  return (
    <nav className="frse-nav">
      <div className="frse-nav-items">
        {items.map((item: IFrseNavItemProps) => (
          <FrseNavItem key={items.indexOf(item)} id={item.id} href={item.href} type={item.type} icon={item.icon} label={item.label} />
        ))}
      </div>
    </nav>
  );
};

export default FrseNav;
