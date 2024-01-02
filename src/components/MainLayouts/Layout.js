import styled from "styled-components";
import Navbar from "./Navbar";
import PreNav from "./PreNav";
import { useSelector } from "react-redux";
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

        {/* {!token && !userCheck ? (
          <div className="footer">
            
          </div>
        ) : (
          ""
        )} */}
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;
  .sideBar {
    position: fixed;
    width: 60px;
    top: 0;
    height: 100vh;
    z-index: 100;
    background-color: white;
    overflow: hidden;
    transition: width 0.3s ease;
    cursor: pointer;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.4);
    &:hover {
      width: 180px;
    }
    @media screen and (min-width: 600px) {
      width: 80px;
    }
  }

  .main_bar {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overflow: hidden;

    .top_bar {
      background: #ffffff;
      display: flex;
      /* position: sticky; */
      height: 80px;
      background-image: linear-gradient(
        to bottom right,
        #c6a5ffc7,
        #c6a5ff63,
        #ffffff,
        #c6a5ff24
      );
      width: 100%;
    }
    .main_body {
      height: 90%;
      width: 100%;
    }
  }
`;
