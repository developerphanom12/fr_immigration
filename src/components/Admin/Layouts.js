import styled from "styled-components";
import Sidebar from "./SideBar";
import DashboardAdmin from "./Dashboard/DashboardAdmin";

export default function Layouts() {
  return (
    <Root>
      <div className="layout_section">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main_section">
          <div className="profile_top_bar"></div>
          <div className="content_section">
            <DashboardAdmin />
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  height: 100%;
  *::-webkit-scrollbar {
    width: 0px;
  }

  .layout_section {
    display: flex;
    width: 100%;
    min-height: 100%;
    /* background-color: black; */
    .sidebar {
      flex: 0 240px;
      min-height: 100vh;
      height: 100%;
      position: sticky;
      top: 0px;
      /* background-color: #f08080; */
      padding: 10px 10px;
      border-right: 1px solid #3b3b3b;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    .main_section {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      width: calc(100% - 240px);
      .profile_top_bar {
        position: sticky;
        top: 0px;
        z-index: 9;
      }
      .content_section {
        /* padding: 20px; */
        flex: 1;
      }
    }
  }
`;
