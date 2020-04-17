import Navigation from "./navigation";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Coskun's Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Navigation />
      </div>
      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
