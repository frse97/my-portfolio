import React from 'react';
import cs from 'classnames';
import { IFrsePortfolio } from '../../../models/model';
import { Page, Header, Main, Section, Footer } from '..';
import './FrsePortfolio.less';

/**
 * The <code>`FrsePortfolio`</code> is used to render the Portfolio itself.
 *
 */

// function FrsePortfolio({ Component, pageProps }) {
const FrsePortfolio: React.FC<IFrsePortfolio> = (props) => {

  const classNames = cs('frse-portfolio');

  return (
    // <div className="frse-portfolio" {...pageProps}>
    <div className={classNames}>
      <Page>
        <Main>
          <Section>
          </Section>
        </Main>
      </Page>
    </div>
  );
};

// FrsePortfolio.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default FrsePortfolio;
