import React from 'react';
import Head from 'next/head';
// import { withTranslation } from '../../../i18next';
import './FrseHead.less';

interface IFrseHeadProps {}

/**
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
const FrseHead: React.FC<IFrseHeadProps> = (props) => {
  return (
    <Head>
      <title>frse</title>
      <meta name="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Sebastian Fries (FRSE)" />
      <meta name="description" content="frse Portfolio" />
      <meta name="keywords" content="frse, FRSE, portfolio, next.js" />
      {/* Meta Tags for Social Media Card-ability on Twitter, Fb, LinkedIn ... */}
      <meta property="og:title" content="Frse Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      {/* 
        Recommended Sizes:
        - Fb -> 1200 * 628 (max 8Mb)
        - Twitter -> 1200 * 628 (max 5Mb)
          - twitter:title
          - twitter:card
        - LinkeIn -> 1200 * 627 (max ?)
        https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards
        
      */}
      <meta property="og:image" content="" />
    </Head>
  );
};

{
  /* <meta name="description" content={this.props.t('decription')} /> */
}
// export default withTranslation()(FrseHead);
export default FrseHead;
