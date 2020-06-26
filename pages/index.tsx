import Head from "next/head";

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
 * - `description` Is used to describe the site
 * - `keywords` Is used to describe keywords for search engines (SEO)
 *              what keywords are allowed? Rights?
 */

const App = () => {
  return (
    <>
      <Head>
        <title>frse</title>
        <meta name="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Sebastian Fries (FRSE)" />
        <meta name="description" content="frse Portofolio" />
        <meta name="keywords" content="frse, FRSE, portfolio, next.js" />
      </Head>
      <div>FRSE's Page</div>
    </>
  );
};

export default App;
