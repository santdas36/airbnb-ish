import styled from "styled-components";
import Image from "next/image";
import { places } from "../data";

export default function Explore() {
  return (
    <ExploreSection>
      <h2>Explore nearby</h2>
      <div className="items">
        {places.map((item, index) => (
          <div key={index} className="item">
            <div className="img">
              <Image
                width={64}
                height={64}
                alt={item.name}
                src={`/images/explore/${index + 1}.jpg`}
                className="shadow"
              />
              <Image
                width={128}
                height={128}
                alt={item.name}
                src={`/images/explore/${index + 1}.jpg`}
              />
            </div>
            <span>
              <h3>{item.name}</h3>
              <p>{item.time}-hour drive</p>
            </span>
          </div>
        ))}
      </div>
    </ExploreSection>
  );
}

const ExploreSection = styled.section`
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(239px, 1fr));
    gap: 1.5rem;
    margin-bottom: -1.5rem;
    padding: 1.5rem 0;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }
  .item {
    display: flex;
    align-items: center;
    border-radius: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    span {
      padding: 0 1.5rem;
      white-space: nowrap;
      transition: padding 0.2s;
    }
    .img {
      position: relative;
      width: 5rem;
      height: 5rem;
      img {
        border-radius: 1rem;
        transition: transform 0.2s;
        width: 100%;
      }
      & > div:first-child {
        position: absolute !important;
        overflow: visible !important;
      }
      & > div {
        width: 100%;
      }
      img.shadow {
        filter: blur(0.5rem) brightness(80%);
        transform: translateY(0.25rem) scaleX(0.9);
        z-index: -1;
        opacity: 0.6;
      }
    }
    &:hover {
      background: var(--white);
      box-shadow: 0 0.25rem 0.5rem #48484810;

      img.shadow {
        transform: translateY(0) scale(0);
      }
      img {
        transform: scale(0.8);
      }
      span {
        padding: 0 2.5rem 0 0.5rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .items {
      grid-template-columns: repeat(4, 1fr);
      overflow: scroll;
      margin: 0 -1.5rem -1.5rem -1.5rem;
      padding: 1.5rem;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 1.5rem;
    }
    .item {
      scroll-snap-align: start;
    }
    .item:last-of-type {
      margin-right: 10rem;
    }
  }
`;
