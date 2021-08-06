import styled from "styled-components";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";
import ResultCard from "./ResultCard";
import { resultImages } from "../data";

export default function SearchResults({ results }) {
  const router = useRouter();
  const checkInDate = format(new Date(router.query.checkIn), "do MMM, yyyy");
  const checkOutDate = format(new Date(router.query.checkOut), "do MMM, yyyy");

  return (
    <ResultsDiv className="hero">
      <div className="inner">
        <p className="details">
          300+ stays - <span className="date">{checkInDate}</span> to{" "}
          <span className="date">{checkOutDate}</span> for {router.query.guests}{" "}
          guests
        </p>
        <h1>Stays in {router.query.location}</h1>

        <div className="results">
          {results.map((item, index) => (
            <ResultCard {...item} imgSrc={resultImages[index]} key={index} />
          ))}
        </div>
      </div>
    </ResultsDiv>
  );
}

const ResultsDiv = styled.section`
  height: fit-content;
  padding: 7.5rem var(--sidePadding);

  .inner {
    max-width: var(--containerWidth);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.2;
    margin-top: 1rem;
  }
  .date {
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    background: var(--gray);
    white-space: nowrap;
    line-height: 2;
    font-size: 90%;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: var(--sidePadding) 0;

    @media (min-width: 48rem) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 36rem) {
    padding-top: 6rem;

    .details {
      font-size: 0.85rem;
    }
  }
`;
