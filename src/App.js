import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/CommonPage/Login";
import Protected from "./components/Protected";
import Layout from "./components/MainLayouts/Layout";
import { useSelector } from "react-redux";
import PageNF from "./components/CommonPage/PageNF";
import Ambassadar from "./components/CommonPage/Ambassadar";
import Partner from "./components/CommonPage/Partner";
import HomePage from "./components/CommonPage/Home/HomePage";
import Universities from "./components/CommonPage/Universities";
import Reach from "./components/CommonPage/Reach";
import Applications from "./components/AllRoutes/AddApplication/Applications";
import History from "./components/AllRoutes/allApplications/History";
import Urm_university from "./components/AllRoutes/Universities/Urm_university";
import Search_course from "./components/AllRoutes/Courses/Search_course";
import DashboardAdmin from "./components/AllRoutes/Dashboard/DashboardAdmin";
import Action from "./components/AllRoutes/actions/Action";
import AgentDash from "./components/AllRoutes/AgentDash/AgentDash";
import AdminLogin from "./components/CommonPage/AdminLogin";
import HistoryMain from "./components/AllRoutes/allApplications/HistoryMain";
function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users?.user);

  const token = localStorage.getItem("token");

  console.log("resres123", userDetails?.role);
  return (
    <Layout>
      <Routes>
        {userCheck && token ? (
          userDetails && userDetails?.role === "admin" ? (
            <>
              <Route path="/dashboard" element={<DashboardAdmin />} />
              <Route path="*" element={<DashboardAdmin />} />
              <Route path="/action" element={<Action />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/history" element={<HistoryMain />} />
              <Route path="/urm" element={<Urm_university />} />
              <Route path="/search" element={<Search_course />} />
            </>
          ) : (
            <>
              <Route path="/dashboardAgent" element={<AgentDash />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/history" element={<HistoryMain />} />
              <Route path="/urm" element={<Urm_university />} />
              <Route path="/search" element={<Search_course />} />
            </>
          )
        ) : (
          <>
            <Route path="*" element={<PageNF />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/reach" element={<Reach />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/ambassadar" element={<Ambassadar />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
