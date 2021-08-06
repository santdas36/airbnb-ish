import { useState, useEffect, useRef } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import NumberInput from "./NumberInput";

export default function DatePicker({
  close,
  checkInDate,
  checkOutDate,
  numberOfAdults,
  numberOfChildren,
}) {
  const [visible, setVisible] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 36rem)");

  const selectionRange = {
    startDate: checkInDate.value,
    endDate: checkOutDate.value,
    key: "selection",
  };

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    return () => setVisible(false);
  }, []);

  function handleSelect(ranges) {
    checkInDate.setValue(ranges.selection.startDate);
    checkOutDate.setValue(ranges.selection.endDate);
  }

  const options = {
    rangeColors: ["#e0565b"],
    ranges: [selectionRange],
    minDate: new Date(),
    onChange: handleSelect,
  };

  return (
    <Container className={visible ? "visible" : null}>
      <div className="inner">
        <h4 style={{ marginBottom: "1.5rem" }}>
          Pick Check-in & Check-out dates
        </h4>
        {isSmallScreen ? (
          <DateRange {...options} />
        ) : (
          <DateRangePicker {...options} />
        )}

        <div className="guests">
          <h4>Add guests</h4>
          <div className="inputs">
            <NumberInput
              name="Adults"
              value={numberOfAdults.value}
              setValue={numberOfAdults.setValue}
            />
            <NumberInput
              name="Children"
              value={numberOfChildren.value}
              setValue={numberOfChildren.setValue}
            />
          </div>
        </div>

        <button className="close button" onClick={close}>
          Close
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 13.5rem var(--sidePadding) 3rem;
  transform: translate(-50%, -100%);
  overflow: hidden;
  max-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--white);
  border-bottom: 2px solid var(--gray);
  box-shadow: 0 3rem 3rem -5rem var(--dark);
  z-index: -1;
  transition: all 0.2s;

  .button {
    transition: transform 0.2s;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: scale(0.95);
      box-shadow: 0 0 0 1px currentColor;
    }
    &:disabled {
      opacity: 0.5;
      box-shadow: none;
    }
  }

  .guests {
    width: 100%;
    padding-top: 3rem;
  }
  .inputs {
    display: flex;
    padding-top: 1rem;
  }

  .inner {
    width: 100%;
    max-width: 720px;
    height: fit-content;
    max-height: calc(100vh - 18rem);
    overflow: scroll;
    opacity: 0;
    transition: opacity 0.5s 0.2s;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
      -webkit-appearance: none;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 0.5rem;
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    background: #ff585d20;
    color: var(--red);
    border-radius: 99px;
  }

  &.visible {
    transform: translate(-50%, 0);

    .inner {
      opacity: 1;
    }
  }

  .rdrDateRangePickerWrapper {
    display: flex;
    justify-content: space-between;
  }
  .rdrDateDisplayWrapper {
    background: none;
  }
  .rdrDayDisabled {
    background-color: var(--light);
  }
  .rdrDateDisplayItem {
    border-radius: 99px;
  }
  .rdrDefinedRangesWrapper {
    border: none;
    border-radius: 1rem;
  }
  .rdrStaticRange {
    border: none;
    background: none;
    &:hover,
    &:focus {
      .rdrStaticRangeLabel {
        background: #eff2f7;
      }
    }
  }
  .rdrDefinedRangesWrapper {
    margin-right: 1.5rem;
    padding-top: 0.75rem;
    background: var(--light);
  }
  .rdrDayToday .rdrDayNumber span:after {
    background: var(--red);
  }

  @media (max-width: 36rem) {
    padding-top: 7.5rem;
    overflow: scroll;
    height: 100vh;

    .rdrCalendarWrapper {
      font-size: 11px;
    }

    .inner {
      height: 100%;
      max-height: unset;
      overflow: scroll;
      padding-bottom: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
    }
    h4 {
      width: 100%;
    }
    .close {
      top: auto;
      bottom: -3.5rem;
      right: 0;
      margin: 0 auto;
      display: block;
      position: relative;
    }
    .inputs {
      flex-direction: column;
      gap: 1rem;
    }
  }
  @media (min-width: 48rem) {
    .rdrDefinedRangesWrapper {
      font-size: 16px;
    }
    .rdrCalendarWrapper {
      font-size: 16px;
    }
  }

  @media (min-width: 36rem) and (max-width: 48rem) {
    .rdrCalendarWrapper {
      margin: 0 auto;
    }
  }
`;
