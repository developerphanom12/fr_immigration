import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { userCheckAction } from "../../redux/users/action";
import russia from "../MainLayouts/pictures/Russia.png";
import canada from "../MainLayouts/pictures/canada.png";
import us from "../MainLayouts/pictures/unitedstates.png";
import maxico from "../MainLayouts/pictures/maxico.jpg";
import china from "../MainLayouts/pictures/china.png";

export default function Navbar() {
  const [activePop, setActivePop] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.setItem("token", "");
    dispatch(userCheckAction(false));
    navigate("/home");
  };

  return (
    <Root>
      {/* <h1>Welcome to our platform</h1> */}
      <div className="flags">
        <div>
          {" "}
          <img src={russia} alt="img" />
          Russia
        </div>
        <div>
          {" "}
          <img src={canada} alt="img" /> Canada
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
      <div className="notification">
        <FcAbout />
      </div>
    </Root>
  );
}

const Root = styled.section`
display: flex;
gap: 450px;
align-items: center;
  .flags {
    display: flex;
    height: 50px;
    margin: 10px 0px;
    gap: 10px;
    padding: 8px;
   
    > div {
      height: 38px;
      width: 150px;
      align-items: center;
      display: flex;
      background-color: rgb(34, 232, 186);
      border-radius: 12px;
      text-align: center;
      gap: 10px;
      justify-content: center;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 130px;
    }
  }
  .notification {
     display: flex;
      justify-content:right;
      font-size: 25px;
    }
`;
