import '../styles/globals.scss'
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

interface Props {
  Component: React.FC;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>Portfolio Klaudia Zygmunt</title>
        <meta name="description" content="Portfolio created by Klaudia Zygmunt" />
        <meta name="keywords" content="PORTFOLIO PROJECT" />
        <link rel="icon" href="/logo_icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};