import styled from "styled-components";
import Image from "next/image";

export default function Hosting() {
  return (
    <HostingSection>
      <span>
        <h2>Try hosting</h2>
        <p>
          Earn extra income and unlock new oppurtunities by sharing your space.
        </p>
        <a href="#" className="btn btn-light">
          Learn more
        </a>
      </span>
    </HostingSection>
  );
}

const HostingSection = styled.section`
  padding: 6rem var(--sidePadding);
  background: url(images/host.jpg);
  background-size: cover;
  background-position: 33% center;
  border-radius: 1rem;
  color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  span {
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url(images/host-sm.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

    h2 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
    span {
      position: absolute;
      padding: 0 var(--sidePadding);
      height: 50%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
`;
