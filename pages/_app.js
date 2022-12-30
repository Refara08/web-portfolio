import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../store/notification-ctx";

const navItems = [
  { placeholder: "Home", link: "/" },
  { placeholder: "Projects", link: "/portfolios#portfolios" },
  { placeholder: "Skills", link: "/skills#skills" },
  { placeholder: "Contact", link: "/contact#contact" },
];

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout navItems={navItems}>
        <Head>
          <meta
            name="google-site-verification"
            content="zgLW5BVxjtsqfD9wt3qJxDW0Kj8ppJEPhRh_y3Ej5W0"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
