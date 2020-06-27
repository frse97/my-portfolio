import { Head, Page, Header, Section } from "../src/components";
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

const App = () => {
  return (
    <>
      <Head />
      <Page>
        <Header />
        <Section>
          <div className="test">
            <span className="frse">frse</span>
          </div>
        </Section>
      </Page>
    </>
  );
};

export default App;
