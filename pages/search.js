import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function Search({ searchResults }) {
  const router = useRouter();
  const placeholder = `${router.query.location} | ${format(
    new Date(router.query.checkIn),
    "d MMM, yy"
  )} | ${format(new Date(router.query.checkIn), "d MMM, yy")} | ${
    router.query.guests
  } guests`;

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <SearchResults results={searchResults} />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (data) => data.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
