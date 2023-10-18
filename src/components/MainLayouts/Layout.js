import styled from "styled-components";
import Navbar from "./Navbar";
import PreNav from "./PreNav";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const token = localStorage.getItem("token");
  console.log("11111111rrr", userCheck, token);
  return (
    <Root>
      {userCheck && token ? (
        <div className="side_bar">
          <SideBar />
        </div>
      ) : (
        " "
      )}

      <div className="main_bar">
        {token ? (
          <div className="top_bar">
               <PreNav />
          </div>
        ) : (
          <div className="pre_nav">
         <Navbar />
          </div>
          
        )}
        <div className="main_body">{children}</div>
        {/* <div className="footer">
          <Footer />
        </div> */}
        {!token && !userCheck ? (
    <div className="footer">
      <Footer />
    </div>
  ) : null}
      </div>
    </Root>
  );
}

const Root = styled.section`
  display:flex;
  flex-direction: column;
  background:#ffffff;
  height:100%;
  min-height:100vh;
  .sidebar {
      flex: 0 240px;
      min-height: 100vh;
      height: 100%;
      position: sticky;
     top: 0px;
/*       background-color: #f08080;  */
      padding: 10px 10px;
      border-right: 1px solid #3b3b3b;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        display: none;
      } 
    }
  
 `
