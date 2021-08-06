import styled from "styled-components";

export default function NumberInput({ name, value, setValue }) {
  return (
    <InputDiv>
      <label htmlFor={name}>{name}</label>
      <span>
        <button
          disabled={value <= 0}
          onClick={() => !(value <= 0) && setValue((val) => val - 1)}
          className="button"
        >
          -
        </button>
        <input
          min={0}
          max={20}
          value={value}
          id={name}
          onChange={(e) => setValue(e.target.value)}
          type="number"
          placeholder="Add dates"
        />
        <button
          onClick={() => !(value >= 20) && setValue((val) => val + 1)}
          className="button"
        >
          +
        </button>
      </span>
    </InputDiv>
  );
}
const InputDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  span {
    background: var(--light);
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    width: fit-content;
  }
  label {
    font-size: 1rem;
    display: block;
    margin-right: 1rem;
  }
  input,
  button {
    background: none;
    border: none;
    font-size: 1rem;
    text-align: center;
    outline: none;
  }
  button {
    line-height: 1;
    border-radius: 99px;
    background: #eff2f7;
    color: var(--dark);
    padding: 0 1rem;
  }
  input {
    padding: 0.5rem;
    width: 4rem;
  }

  @media (max-width: 36rem) {
    span {
      margin-left: auto;
      padding: 0.25rem;
    }
  }
`;
