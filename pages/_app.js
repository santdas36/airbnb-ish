import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Airbnb-ish</title>
        <meta name="description" content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "7v7x1x83wa");
      </script>
    </>
  );
}

export default MyApp;




{/* deeyes36acfed */}
