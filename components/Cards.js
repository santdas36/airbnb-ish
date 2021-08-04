import styled from "styled-components";
import Image from "next/image";

export default function Cards({ title, items, urlPrefix }) {
  return (
    <CardsSection length={items.length}>
      <h2>{title}</h2>

      <div className="cards">
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="img">
              <Image
                width={128}
                height={128}
                alt={item.title}
                src={urlPrefix + item.img}
                className="shadow"
              />
              <Image
                width={256}
                height={256}
                alt={item.title}
                src={urlPrefix + item.img}
              />
            </div>
            <span>
              <h3>{item.title}</h3>
              {item.p && <p>{item.p}</p>}
            </span>
          </div>
        ))}
      </div>
    </CardsSection>
  );
}

const CardsSection = styled.section`
  .cards {
    display: grid;
    grid-template-columns: repeat(${(props) => props.length}, 1fr);
    gap: 1.5rem;
    margin-bottom: -1.5rem;
    padding: 1.5rem 0;
  }
  .card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
      margin-top: 0.75rem;

      h3 {
        font-size: 1.25rem;
      }
    }
    img {
      border-radius: 1rem;
      width: 100%;
      transition: all 0.2s;
    }
    &:hover img {
      transform: scale(0.95);
    }

    .img {
      position: relative;
      & > div:first-child {
        position: absolute !important;
        overflow: visible !important;
        width: 100%;
      }
      & > div {
        width: 100%;
      }
    }
    .shadow {
      position: absolute;
      filter: blur(1rem) brightness(80%);
      transform: translateY(0.5rem) scaleX(0.9);
      z-index: -1;
      opacity: 0.6;
    }
  }

  @media (max-width: 36rem) {
    .cards {
      grid-template-columns: repeat(${(props) => props.length}, 80%);
      grid-template-rows: 1fr;
      overflow: scroll;
      margin: 0 -1.5rem -1.5rem -1.5rem;
      padding: 1.5rem;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 1.5rem;
    }
    .card {
      scroll-snap-align: start;

      span {
        margin-top: 0.5rem;
        h3 {
          line-height: 1.3;
        }
        p {
          margin-top: 0.25rem;
        }
      }
    }
    .card:last-of-type {
      margin-right: 10rem;
    }
    .card:last-of-type {
      border-right: 1.5rem solid transparent;
      width: calc(100% + 1.5rem);
    }
  }
`;
