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
            className={activeParam === "dashboardd" ? "active" : ""}
            onClick={() => {
              navigate("/dashboardd");
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
            <>
            <div
              className={activeParam === "action" ? "active" : ""}
              onClick={() => {
                navigate("/action");
              }}
            >
              {<MdPersonSearch />}
              <p>Action</p>
            </div>
            <div
            className={activeParam === "action" ? "active" : ""}
            onClick={() => {
              navigate("/createstaff");
            }}
          >
            {<MdPersonSearch />}
            <p>Create Staff</p>
          </div>
          </>
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
  font-family: 32px "Cairo", sans-serif;
  width: 100%;
  border-right: 1px solid gray;
  align-items: center;
  overflow-y: none;
  position: sticky;
  top: 0px;
  @media (max-width: 798px) {
    width: 130px;
    font-size: smaller;
    flex-direction: column;
    padding: 5px;
    gap: 5px;
  }
  .menu_top {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .company_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 160px;
        cursor: pointer;
      }
      @media (max-width: 798px) {
        flex-direction: column;
        font-size: smaller;
        width: 100px;
        padding: 5px;
        background-color: transparent;
        img {
          width: 100px;
          cursor: pointer;
        }
      }
    }
    .caption {
      color: gray;
      text-align: center;
      font-size: 16px;
      margin: 0;
      @media (max-width: 798px) {
        flex-direction: column;
        font-size: smaller;
        width: 100px;
        padding: 5px;
        background-color: transparent;
      }
    }
    .nav_section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      height: 100%;
      padding: 10px;
      font-size: 13px;

      @media (max-width: 798px) {
        flex-direction: column;
        font-size: 13px;
        width: 130px;
        margin: 2px;
        padding: 5px;
        gap: 0;
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        gap: 10px;
        padding: 10px;
        border-radius: 40px;
        @media (max-width: 798px) {
          flex-direction: column;
          width: 80px;
          gap: 0;
        }
        &:hover {
          background: linear-gradient(
            45deg,
            #0146ff 19%,
            #0146ff96 98%,
            #0146ff 100%
          );
          color: white;
          cursor: pointer;
          @media (max-width: 700px) {
            background-color: transparent;
            color: black;
          }
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
        background: linear-gradient(
            45deg,
            #0146ff 19%,
            #0146ff96 98%,
            #0146ff 100%
          );
        @media (max-width: 800px) {
          background:transparent;
          &:hover{
          background: transparent;

          }
        }
      }
    }
  }
  .logout {
    display: flex;
    /* justify-content: center; */
    align-items:flex-start;
    width: 90%;
    gap: 10px;
    align-items: center;
    padding: 10px;
    text-align: center;
    border-radius: 40px;
    font-size: 13px;
    margin: 10px;
   
    @media (max-width: 798px) {
      /* flex-direction: column; */
      text-size-adjust: smaller;
      width: 130px;
      gap: 0;
      padding: 10px;
      background-color: transparent;
    }
    &:hover {
      background: linear-gradient(
            45deg,
            #0146ff 19%,
            #0146ff96 98%,
            #0146ff 100%
          );
      color: white;
      cursor: pointer;
    }

    p {
      margin: 0;
      padding: 0;
      /* flex: 1; */
    }
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
