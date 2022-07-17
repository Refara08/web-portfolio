import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* layout wrapper yang isinya itu Head, Meta, Title, Nav, Notification, and contact me as a footer */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
