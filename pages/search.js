import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import Map from "../components/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

export default function Search({ searchResults }) {
  const router = useRouter();
  const placeholder = `${router.query.location} | ${format(
    new Date(router.query.checkIn),
    "d MMM, yy"
  )} | ${format(new Date(router.query.checkIn), "d MMM, yy")} | ${
    router.query.guests
  } guests`;
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = [...searchResults].slice(1).map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <Map
          results={searchResults}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          viewport={viewport}
          setViewport={setViewport}
        />
        <SearchResults
          setSelectedLocation={setSelectedLocation}
          results={searchResults}
          setViewport={setViewport}
        />
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
