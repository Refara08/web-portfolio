import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../store/notification-ctx";

const navItems = [
  { placeholder: "Services", link: "/#services" },
  { placeholder: "Skills", link: "/#skills" },
  { placeholder: "Portfolios", link: "/#portfolios" },
  { placeholder: "Contact", link: "/#contact" },
];

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout navItems={navItems}>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
