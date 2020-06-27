import Head from 'next/head';

interface IFrseHeadProps {}

const FrseHead: React.FC<IFrseHeadProps> = (props) => {
  return (
    <Head>
      <title>frse</title>
      <meta name="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Sebastian Fries (FRSE)" />
      <meta name="description" content="frse Portofolio" />
      <meta name="keywords" content="frse, FRSE, portfolio, next.js" />
    </Head>
  );
};

export default FrseHead;
