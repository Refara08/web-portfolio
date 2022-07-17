import Head from "next/head";
import Navigation from "../nav/Navigation";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Gema Refantero</title>
        <meta
          name="description"
          content="Gema Refantero's web front end developer portfolio"
        />
      </Head>
      <div className={`bg-primary text-txt-prime`}>
        <div className="container mx-auto ">
          <Navigation />
          <main className="flex-[1]">{props.children}</main>
          <footer>
            <div>
              <h2>this is footer</h2>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
