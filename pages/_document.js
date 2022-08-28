import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <div id={"overlays"} />
          <div id="notification-overlay" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
