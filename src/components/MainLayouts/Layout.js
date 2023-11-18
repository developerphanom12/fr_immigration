import styled from "styled-components";
import Navbar from "./Navbar";
import PreNav from "./PreNav";
import { useSelector } from "react-redux";
import Footer from "../CommonPage/Footer";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const token = localStorage.getItem("token");
  console.log("11111111rrr", userCheck, token);
  return (
    <Root>
      {userCheck && token ? (
        <div className="sideBar">
          <SideBar />
        </div>
      ) : (
        ""
      )}

      <div className="main_bar">
        {token && userCheck ? (
          <div className="top_bar">
            <Navbar />
          </div>
        ) : (
          <div className="pre_nav">
            <PreNav />
          </div>
        )}
        <div className="main_body">{children}</div>

        {!token && !userCheck ? (
          <div className="footer">
            <Footer />
          </div>
        ) : (
          ""
        )}
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;
  .sideBar {
    flex: 0 16%;
    min-height: 100vh;
    height: 100%;
    position: sticky;
    top: 0px;
    border-right: 1px solid gray;
    padding: 5px 5px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 798px) {
      flex-direction: column;
      text-size-adjust: smaller;
      width: 50%;
      padding: 10px;
      background-color: transparent;
    }
  }

  .main_bar {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    /* padding-left: 10px; */
    overflow: hidden;
    .top_bar {
      background: #ffffff;
      display: flex;
      height: 10%;
      width: 100%;
    }
    .main_body {
      height: 90%;
      width: 100%;
      padding: 10px;
      /* margin-top:80px ; */
    }
  }
`;
