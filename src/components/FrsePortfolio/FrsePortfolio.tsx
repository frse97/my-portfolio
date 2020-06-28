import { IFrsePortfolio, PortfolioThemes } from "../../../pages/model";
import { useState } from "react";
import { Page, Header, Section, Footer } from "..";
import cs from 'classnames';
import './FrsePortfolio.less';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
*/

// function FrsePortfolio({ Component, pageProps }) {
const FrsePortfolio: React.FC<IFrsePortfolio> = (props) => {
  const { theme } = props;
  const [currentTheme, setTheme] = useState<PortfolioThemes>(theme);

  const themeClass = currentTheme === 'light' ? 'frse-light' : 'frse-dark';
  const classNames = cs('frse-portfolio', themeClass);

  return (
    // <div className="frse-portfolio" {...pageProps}>
    <div className={classNames}>
      <Page>
        <Header />
        <Section>
          <div className="test">
            <span className="frse">frse</span>
          </div>
        </Section>
        <Footer />
      </Page>
    </div>
  );
};

// FrsePortfolio.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default FrsePortfolio;
