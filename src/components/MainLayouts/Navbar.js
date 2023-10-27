import styled from "styled-components";
import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import russia from "../MainLayouts/pictures/Russia.png";
import canada from "../MainLayouts/pictures/canada.png";
import us from "../MainLayouts/pictures/unitedstates.png";
import maxico from "../MainLayouts/pictures/maxico.jpg";
import china from "../MainLayouts/pictures/china.png";
import { EXCHANGE_URLS_APPLICATION } from "../URLS";
import axios from "axios";

export default function Navbar() {
  const [activePop, setActivePop] = useState(false);
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/fetchallapplications`,
        axiosConfig
      );
      setProfile(res?.data?.data[0].applications);
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
          Russia
        </div>
        <div>
          {" "}
          <img src={canada} alt="img" />
          Canada
        </div>
        <div>
          {" "}
          <img src={us} alt="img" />
          United States
        </div>
        <div>
          {" "}
          <img src={maxico} alt="img" />
          Mexico
        </div>
        <div>
          {" "}
          <img src={china} alt="img" />
          China
        </div>
      </div>
      <div>
        <div className="profile">
          <FcBusinessman />
          {profile && profile.length > 0 && (
            <div>
              <p>{profile[0].university_id.person_name}</p>
            </div>
          )}
        </div>
      </div>

      <div className="notification">
        <FcAbout />
      </div>
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
          Russia
        </div>
        <div className="opt_btn">
          {" "}
          <img src={canada} alt="img" />
          Canada
        </div>
        <div className="opt_btn">
          {" "}
          <img src={us} alt="img" />
          United States
        </div>
        <div className="opt_btn">
          {" "}
          <img src={maxico} alt="img" />
          Mexico
        </div>
        <div className="opt_btn">
          {" "}
          <img src={china} alt="img" />
          China
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  height: 80px;
  justify-content: space-evenly;
  .flags {
    display: flex;
    height: 50px;
    margin: 10px 0px;
    gap: 10px;
    padding: 8px;
    @media (max-width: 850px) {
      display: none;
    }

    > div {
      height: 38px;
      width: 150px;
      align-items: center;
      display: flex;
      background-color: rgb(34, 232, 186);
      border-radius: 12px;
      text-align: center;
      gap: 5px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 130px;
      }
    }
  }
  .profile {
    display: flex;
    height: 80px;
    padding: 5px;
    margin: 5px;
   
    justify-content: center;
    align-items: center;
    svg{
    width: 35px;
    height: 40px;
  }
    > div {
      border: 1px solid black;
      padding: 5px;
      border-radius: 10% 40%;
      p {
        padding: 0px;
        margin: 0px;
        text-transform: capitalize;
        color: #8b0000;
      }
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
    @media (max-width: 850px) {
      display: block;
      padding-right: 10px;
      justify-content: left;
    }
  }
  .menu {
    @media (min-width: 851px) {
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
`;
