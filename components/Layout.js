import Header from "./Header";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
      </Head>
      <Header />
      {props.children}
    </>
  );
}
