import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../store/notification-ctx";

const navItems = [
  { placeholder: "Home", link: "/" },
  { placeholder: "Portfolios", link: "/portfolios" },
  { placeholder: "Skills", link: "/skills" },
  { placeholder: "Contact", link: "/contact" },
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
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
