import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_ADMIN, IMG_URL } from "../../../URLS";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import cogoToast from "cogo-toast";
import axios from "axios";

export default function GetUniDetail({ getUniv }) {
  const [status, setStatus] = useState({
    userId: "",
    email: "",
    is_approved: "",
  });

  const statusApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios.post(
        `${EXCHANGE_URLS_ADMIN}/updat11e`,
        status,
        axiosConfig
      );
      console.log("response", response?.data);
      if (response?.status === 201) {
        cogoToast.success(`Email: ${status.email}`);
        navigate("/dashboardd");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = (userId, isApproved) => {
    const currentUser = getUniv.find((univ) => univ.id === userId);
    if (currentUser) {
      setStatus({
        userId,
        email: currentUser.email,
        is_approved: isApproved ? 1 : 0,
      });
      if (status.is_approved === 1) {
        cogoToast.success("University Approved");
      } else {
        cogoToast.error("University Reject");
      }
      statusApi();
    } else {
      cogoToast.error("User not found");
    }
  };
  return (
    <Root>
      <div className="view">
        <a
          href={`${IMG_URL}/${getUniv?.documents[0]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          University Image{" "}
          <button>
            <ImEye />
          </button>
        </a>
      </div>
      <div className="view">
        <a
          href={`${IMG_URL}/${getUniv?.documents[0]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          Registration Certificate{" "}
          <button>
            <ImEye />
          </button>
        </a>
      </div>
      {getUniv &&
          getUniv.map((i) => {
              return (
                <div className="app_rej">
        <button className="right" onClick={() => handleClick(i.id, 1)}>
          <IoCheckmarkSharp />
        </button>
        <button className="wrong" onClick={() => handleClick(i.id, 0)}>
          <IoCloseSharp />
        </button>
      </div>
        )})}
    </Root>
  );
}
const Root = styled.section`
  background-color: #f1f1f2;
  padding-bottom: 20px;
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .view {
    display: flex;
    padding: 10px;
    width: 60%;
    button {
      border: none;
      svg {
        color: darkgrey;
        width: 20px;
        height: 20px;
      }
    }
  }
  .app_rej {
    svg {
      width: 20px;
      height: 20px;
      font-weight: 700;
    }
    .right {
      border: none;
      border-radius: 5px;
      padding: 5px 7px;
      background-color: green;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        background-color: #ffffff;
        color: green;
      }
    }
    .wrong {
      border: none;
      border-radius: 5px;
      padding: 5px 7px;
      background-color: red;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        background-color: #ffffff;
        color: red;
      }
    }
  }
`;
