// import App from 'next/app';
import { Head, Page, Header, Section, Footer } from '../src/components';
import '../main.less';

/**
 * The <code>`App`</code> is used to render the landing page.
 *
 * The `<title></title>` tag defined document title
 * - Provides title for page
 * - Provides title when added to favourites
 * - Provides title for page in search engine results
 *
 * The `<meta></meta>` tag defines metadata.
 * - `viewport` Is used to define the viewport
 * - `author` Is used to define the author
 * - `description` Is used to describe the site
 * - `keywords` Is used to describe keywords for search engines (SEO)
 *              what keywords are allowed? Rights?
 */

// function FrsePortfolio({ Component, pageProps }) {
const FrsePortfolio = () => {
  // <div className="frse-portfolio" {...pageProps}>
  return (
    <div className="frse-portfolio">
      <Head />
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
