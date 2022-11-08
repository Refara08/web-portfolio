import Head from "next/head";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Services />
    </div>
  );
};

export default ServicesPage;
