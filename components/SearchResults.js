import styled from "styled-components";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";
import ResultCard from "./ResultCard";
import { resultImages } from "../data";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function SearchResults({
  results,
  setViewport,
  setSelectedLocation,
}) {
  const router = useRouter();
  const checkInDate = format(new Date(router.query.checkIn), "do MMM, yyyy");
  const checkOutDate = format(new Date(router.query.checkOut), "do MMM, yyyy");

  const setSelection = (data) => {
    setSelectedLocation(data);
    setViewport({ latitude: data.lat - 0.01, longitude: data.long, zoom: 11 });
    console.log(data);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            <ResultCard
              onClick={() =>
                setSelection({ lat: item.lat, long: item.long, index: index })
              }
              {...item}
              imgSrc={resultImages[index]}
              key={index}
            />
          ))}
        </div>

        <div className="navigation">
          <button className="prev" aria-label="previous">
            <ArrowLeft />
          </button>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          ...
          <span>8</span>
          <span>9</span>
          <button className="next" aria-label="next">
            <ArrowRight />
          </button>
        </div>
      </div>
    </ResultsDiv>
  );
}

const ResultsDiv = styled.section`
  height: fit-content;
  padding: 3rem var(--sidePadding);
  z-index: 1;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -1rem 2rem -1rem #0003;
  background: var(--light);
  max-width: calc(var(--containerWidth) + 2 * var(--sidePadding));
  margin: 0 auto;

  .inner {
    display: flex;
    flex-direction: column;
  }
  .navigation {
    display: flex;
    padding-top: 1.5rem;
    align-items: center;
    button,
    span {
      background: var(--gray);
      border: none;
      border-radius: 99px;
      display: grid;
      place-items: center;
      width: 3rem;
      height: 3rem;
      outline: none;
      &:hover,
      &:focus {
        box-shadow: 0 0 0 1px var(--dark);
      }
    }
    span {
      width: 2rem;
      height: 2rem;
      margin: 0 0.75rem;
      user-select: none;
      cursor: pointer;

      @media (max-width: 36rem) {
        display: none;
      }
      &.active {
        background: var(--dark);
        color: var(--light);
      }
    }

    button.prev {
      margin-right: auto;
    }
    button.next {
      margin-left: auto;
    }
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
    &::before {
      position: absolute;
      content: "";
      background: var(--dark);
      width: 3rem;
      height: 3px;
      border-radius: 3px;
      opacity: 0.25;
      top: 0.75rem;
      left: calc(50% - 1.5rem);
    }
    .details {
      font-size: 0.85rem;
    }
  }
`;
