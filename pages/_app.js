import "../styles/globals.css";
import Layout from "../components/layout/Layout";

const navItems = [
  { placeholder: "Services", link: "/#services" },
  { placeholder: "Skills", link: "/#skills" },
  { placeholder: "Portfolios", link: "/#portfolios" },
  { placeholder: "Contact", link: "/#contact" },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout navItems={navItems}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
