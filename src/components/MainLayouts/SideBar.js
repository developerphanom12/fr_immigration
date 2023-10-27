import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdPersonSearch } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cogoToast from "cogo-toast";
import { useDispatch, useSelector } from "react-redux";
import { userCheckAction } from "../../redux/users/action";
import logo from "../CommonPage/imageLogo/phanom.jpg";

export default function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    localStorage.setItem("token", "");
    dispatch(userCheckAction(false));
    cogoToast.success("Logout Successfully");
    navigate("/home");
  };

  const userDetails = useSelector((state) => state?.users.user);
  const currentUrl = window.location.href;
  const activeParam = currentUrl.replace("?", "/").split("/")[3];

  console.log("activeparam", activeParam);

  return (
    <Root>
      <div className="menu_top">
        <div
          className="company_logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="img" />
        </div>

        <div className="nav_section">
          <p className="caption">ANALYTICS</p>
          <div
            className={activeParam === "dashboard" ? "active" : ""}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <FaHome />
            <p>Dashboard</p>
          </div>
          <div
            className={activeParam === "applications" ? "active" : ""}
            onClick={() => {
              navigate("/applications");
            }}
          >
            {<MdPersonSearch />}
            <p>Add New Applicaton</p>
          </div>
          <div
            className={activeParam === "history" ? "active" : ""}
            onClick={() => {
              navigate("/history");
            }}
          >
            {<MdWorkHistory />}
            <p>Application History</p>
          </div>
          <div
            className={activeParam === "urm" ? "active" : ""}
            onClick={() => {
              navigate("/urm");
            }}
          >
            {<FaUniversity />}
            <p>URM university</p>
          </div>
          <div
            className={activeParam === "search" ? "active" : ""}
            onClick={() => {
              navigate("/search");
            }}
          >
            {<MdSearch />}
            <p>Search Course</p>
          </div>
          {userDetails.role === "admin" ? (
            <div
              className={activeParam === "action" ? "active" : ""}
              onClick={() => {
                navigate("/action");
              }}
            >
              {<MdPersonSearch />}
              <p>Action</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className="logout"
        onClick={() => {
          handleLogoutClick();
        }}
      >
        <FiLogOut />
        <p>Logout</p>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 100vh;
  color: black;
  padding: 5px;
  width: 100%;
  border-right: 1px solid gray;
  align-items: center;
  overflow-y: none;
  position: sticky;
  top: 0px;
  .menu_top {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .company_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 200px;
        cursor: pointer;
      }
    }
    .caption {
      color: gray;
      text-align: center;
      font-size: 16px;
      margin: 0;
    }
    .nav_section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      height: 100%;
      > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        &:hover {
          background-color: #87CEFA;
          cursor: pointer;
        }

        p {
          margin: 0;
          padding: 0;
          flex: 1;
        }
        svg {
          width: 25px;
          height: 25px;
        }
      }
      .active {
        background-color: #87CEFA;
      }
    }
  }
  .logout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 237px;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      background-color:#87CEFA;
      cursor: pointer;
    }
    p {
      margin: 0;
      padding: 0;
      flex: 1;
      font-size: 20px;
    }
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
