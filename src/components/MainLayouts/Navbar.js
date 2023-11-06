import styled from "styled-components";
import { useEffect, useState } from "react";
import { FcList } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import russia from "../MainLayouts/pictures/Russia.png";
import canada from "../MainLayouts/pictures/canada.png";
import us from "../MainLayouts/pictures/unitedstates.png";
import maxico from "../MainLayouts/pictures/maxico.jpg";
import china from "../MainLayouts/pictures/china.png";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [activePop, setActivePop] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const [isListOpen, setIsListOpen] = useState(false); 
  const getProfile = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(`${EXCHANGE_URLS}/get/detail`, axiosConfig);
      setProfile(res?.data?.data);
      console.log("resp", res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleList = () => {

    setIsListOpen(!isListOpen);
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log("profile", profile);

  return (
    <Root>
      <div className="flags">
        <div>
          {" "}
          <img src={russia} alt="img" />
          <p>Russia</p>
        </div>
        <div>
          {" "}
          <img src={canada} alt="img" />
          <p> Canada</p>
        </div>
        <div>
          {" "}
          <img src={us} alt="img" />
          <p>United States</p>
        </div>
        <div>
          {" "}
          <img src={maxico} alt="img" />
          <p>Mexico</p>
        </div>
        <div>
          {" "}
          <img src={china} alt="img" />
          <p>China</p>
        </div>
      </div>
      <div className="profile">
      {profile && profile.username ? (
            <div>
              <FaUserCircle />
              <div onClick={toggleList}>
                {profile.username}
              </div>
              {isListOpen && ( 
                <ul className="option-list">
                  <li>
                    <Link to="/user">Profile Details</Link>
                  </li>
                  <li>
                    <Link to="/address">Address Details</Link>
                  </li>
                  <li>
                    <Link to="/changepass">Change Password</Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div>
              <FaUserCircle /> Admin
            </div>
          )}
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
      width: 170px;
      align-items: center;
      display: flex;
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 6px 10px;
      text-align: center;
      gap: 5px;
      P {
        color: #999;
        font-family: "Cairo", sans-serif;
        font-size: 16px;
        align-items: center;
        display: flex;
        margin: 0;
        font-weight: 700;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 130px;
      }
    }
  }
  .profile {
    display: flex;
    height: 70px;
    padding: 5px;
    margin: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      display: flex;
      padding: 10px;
      border-radius: 10%;
      align-items: center;
      gap: 10px;
      width: 150px;
      background-color: #f8f8f8;
      svg {
        width: 25px;
        height: 30px;
      }
      select {
        padding: 0px;
        margin: 0px;
        text-transform: capitalize;
        color: #474040;
        width: 100px;
        border: transparent;
        border-radius: 20px;
        padding: 5px;
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
  ul.closed {
  display: none;
}

ul.open {
  display: block;
  -webkit-overflow-scrolling-y:scroll;
}
`;
