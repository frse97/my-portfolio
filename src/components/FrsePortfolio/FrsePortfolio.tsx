import { IFrsePortfolio } from "../../../pages/model";
import { Page, Header, Main, Section, Footer } from "..";
import cs from 'classnames';
import './FrsePortfolio.less';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
*/

// function FrsePortfolio({ Component, pageProps }) {
const FrsePortfolio: React.FC<IFrsePortfolio> = (props) => {
  const { theme } = props;

  const themeClass = theme === 'light' ? 'frse-light' : 'frse-dark';
  const classNames = cs('frse-portfolio', themeClass);

  console.log('theme', theme);
  console.log(themeClass);
  return (
    // <div className="frse-portfolio" {...pageProps}>
    <div className={classNames}>
      <Page>
        <Header />
        <Main>
          <Section>
            <div className="test">
              <span className="frse">frse</span>
            </div>
          </Section>
        </Main>
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
