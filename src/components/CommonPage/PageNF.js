import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiSolidError } from "react-icons/bi";

export default function PageNF() {
  const navigate = useNavigate();
  return (
    <Root>
      <h4>
        <BiSolidError /> This Page Is Not Found
      </h4>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back To Previous Page
      </button>
    </Root>
  );
}
const Root = styled.section`
  margin: 80px;
  text-align: center;
  font-size: 15px;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    gap: 10px;
    @keyframes tilt-shaking {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(5deg);
      }
      50% {
        transform: rotate(0eg);
      }
      75% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    svg {
      color: red;
      width: 30px;
      height: 30px;
    }
  }
  button {
    border: none;
    box-shadow: 4px 5px 5px gray;
    padding: 10px;
  }
`;
