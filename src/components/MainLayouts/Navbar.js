import styled from "styled-components";
import { useEffect, useState } from "react";
import { FcList } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import russia from "../MainLayouts/pictures/Russia.png";
import canada from "../MainLayouts/pictures/canada.png";
import us from "../MainLayouts/pictures/unitedstates.png";
import maxico from "../MainLayouts/pictures/maxico.jpg";
import china from "../MainLayouts/pictures/china.png";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userDetails = useSelector((state) => state?.users.user);
  const [activePop, setActivePop] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS}/get/detail/by`,
        axiosConfig
      );
      setProfile(res?.data?.data);
      console.log("resp", res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Root>
      <div className="flags">
        <div>
          {" "}
          <img src={russia} alt="img" />
        </div>
        <div>
          {" "}
          <img src={canada} alt="img" />
        </div>
        <div>
          {" "}
          <img src={us} alt="img" />
        </div>
        <div>
          {" "}
          <img src={maxico} alt="img" />
        </div>
        <div>
          {" "}
          <img src={china} alt="img" />
        </div>
      </div>
      {userDetails.role === "user" || "student" || "university" ? (
        <div
          className="profile"
          onClick={() => {
            setIsListOpen(!isListOpen);
          }}
        >
          <FaUserCircle />
          <div>
            {profile?.username ? profile.username : "Unknown"}{" "}
            <IoIosArrowDown />
          </div>
          <div className={isListOpen ? "option_list" : "off"}>
            <p>
              <Link to="/profile">Profile Details</Link>
            </p>
            <p>
              <Link to="/changepass">Change Password</Link>
            </p>
          </div>
        </div>
      ) : (
        "Admin"
      )}

      <div
        className="menu"
        onClick={() => {
          setActivePop(true);
        }}
      >
        <FcList />
      </div>
      <div
        className={activePop ? "pop_nav" : "no_pop"}
        onClick={() => {
          setActivePop(false);
        }}
      >
        <div className="opt_btn">
          {" "}
          <img src={russia} alt="img" />
        </div>
        <div className="opt_btn">
          {" "}
          <img src={canada} alt="img" />
        </div>
        <div className="opt_btn">
          {" "}
          <img src={us} alt="img" />
        </div>
        <div className="opt_btn">
          {" "}
          <img src={maxico} alt="img" />
        </div>
        <div className="opt_btn">
          {" "}
          <img src={china} alt="img" />
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 10px;
  width: 90%;
  background-color: #f8f8f8;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .flags {
    display: flex;
    height: 50px;
    margin: 10px 0px;
    gap: 10px;
    padding: 8px;
    @media (max-width: 1020px) {
      display: none;
    }

    > div {
      height: 98%;
      align-items: center;
      display: flex;
      border-radius: 10px;
      padding: 6px 10px;
      text-align: center;
      gap: 10px;
      P {
        color: #999;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        align-items: center;
        display: flex;
        margin: 0;
        font-weight: 700;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  .profile {
    display: flex;
    padding: 5px;
    margin: 5px;
    gap: 7px;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    background-color: lightgray;
    &:hover {
      box-shadow: 4px 4px 5px gray;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    > div {
      text-align: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    .option_list {
      background-color: lightgray;
      z-index: 1;
      top: 10;
      top: 5;
      right: 50;
      top: 110%;
      position: absolute;
      width: 170px;
      border: 1px solid lightgray;
      text-decoration: none;
      p {
        margin: 0;
        padding: 5px;
        &:hover {
          background-color: white;
        }
      }
      a {
        text-decoration: none;
        color: black;
      }
    }
    .off {
      display: none;
    }
  }
  .notification {
    display: flex;
    justify-content: right;
    font-size: 25px;
    background-color: transparent;
    cursor: pointer;
    align-items: flex-end;
    margin-right: 5px;
    .details {
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 200px;
    }
  }
  .menu {
    @media (max-width: 1020px) {
      display: block;
      padding-right: 10px;
      justify-content: left;
    }
  }
  .menu {
    @media (min-width: 1022px) {
      display: none;
    }
  }

  .pop_nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 400px;
    width: 100%;
    background: #ff7f50;
    .notification {
      display: flex;
      flex-direction: column;
      font-size: 25px;
      margin-left: 10px;
    }
  }
  .no_pop {
    display: none;
  }
  img {
    background: none;
    color: black;
    border-color: transparent;
    font-size: larger;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    img:hover {
      background-color: rgb(249, 147, 45);
      color: #ffffff;
    }
  }
  ul.closed {
    display: none;
  }

  ul.open {
    display: block;
    -webkit-overflow-scrolling-y: scroll;
  }
  .option_list {
    position: relative;
    display: inline-block;
  }
`;
