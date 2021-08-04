import styled from "styled-components";
import Image from "next/image";
import { Globe, DollarSign, Facebook, Twitter, Instagram } from "react-feather";

export default function Footer() {
  return (
    <FooterSection>
      <div className="footerInner">
        <span>
          <h2>About</h2>
          <ul>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Airbnb 2021</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li className="lg-hidden">HotelTonight</li>
            <li className="lg-hidden">Airbnb for Work</li>
            <li className="lg-hidden">Made possible by Hosts</li>
            <li className="lg-hidden">Careers</li>
            <li className="lg-hidden">Founders&apos; Letter</li>
          </ul>
        </span>
        <span>
          <h2>Community</h2>
          <ul>
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
            <li>Airbnb.org</li>
          </ul>
        </span>
        <span>
          <h2>Host</h2>
          <ul>
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Resource Centre</li>
            <li>Community Centre</li>
          </ul>
        </span>
        <span>
          <h2>Support</h2>
          <ul>
            <li>Our COVID-19 Response</li>
            <li>Help Centre</li>
            <li>Cancellation options</li>
            <li>Neighbourhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </span>
        <span className="footer-bottom">
          <p>
            <span>
              <Globe className="globe" />
              English
            </span>
            <span>
              <DollarSign className="dollar" />
              USD
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Instagram />
            </span>
          </p>
          <p>&copy; 2021 <a href="https://dashsantosh.me" target="_blank" rel="noreferrer">Dash Santosh</a></p>
        </span>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  padding: 3rem var(--sidePadding);
  background: var(--gray);
  border-top: 1px solid #0002;

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
  .footerInner {
    & > span {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 0;
    }
    & > span + span {
      border-top: 1px solid #0002;
    }
    & > span:first-of-type {
      padding-top: 0;
    }
    & > span:last-of-type {
      padding-bottom: 0;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      li {
        padding: 0.25rem 0;
        font-size: 0.85rem;
        cursor: pointer;
        opacity: 0.8;
        transition: all 0.2s;
        width: fit-content;

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }
    }

    .footer-bottom {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: space-between;
      a {
        margin-left: 0.5rem;
      }
      a:hover {
        text-decoration: underline;
        color: var(--red);
      }
      svg {
        height: 1rem;
      }
      svg.globe {
        margin-right: 0.1rem;
      }
      svg.dollar {
        margin-right: -0.1rem;
      }
      span + span {
        margin-left: 1rem;
      }
      p,
      span {
        display: flex;
        align-items: center;
      }
    }
  }

  @media (max-width: 36rem) {
    .footerInner .footer-bottom {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media (min-width: 81rem) {
    .footerInner {
      display: flex;
      flex-flow: row wrap;
      max-width: 1200px;
      margin: 0 auto;
      justify-content: space-between;

      .footer-bottom {
        flex: 0 0 100%;
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }
      .lg-hidden {
        display: none;
      }
      & > span:not(.footer-bottom) {
        padding: 0;
        border-top: none !important;
      }
    }
  }
`;
