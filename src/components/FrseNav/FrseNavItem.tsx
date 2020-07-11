import React from 'react';
import Link from 'next/link';

export type FrseNavItemType = 'internal' | 'external';

export interface IFrseNavItemProps {
  /**
   * The type of the nav-item
   * - internal -> internal link
   * - external -> external link
   */
  type: FrseNavItemType;
  /**
   * Identication
   */
  id: string;
  /**
   * The destination
   */
  href: string;
  /**
   * The label of the  item (optional)
   */
  label?: string;
  /**
   * Additional Icon (optional)
   */
  icon?: JSX.Element;
}

const FrseNavItem: React.FC<IFrseNavItemProps> = (props) => {
  const { id, type, href, label, icon } = props;

  return type === 'internal' ? (
    <Link href={href}>
      {icon}
      <a id={id} className="frse-nav-item">{label}</a>
    </Link>
  ) : (
    <a id={id} className="frse-nav-item" href={href}>{icon}</a>
  );
};

export default FrseNavItem;