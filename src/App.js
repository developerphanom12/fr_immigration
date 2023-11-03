import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/CommonPage/Login";
import Layout from "./components/MainLayouts/Layout";
import { useSelector } from "react-redux";
import PageNF from "./components/CommonPage/PageNF";
import Partner from "./components/CommonPage/Partner";
import HomePage from "./components/CommonPage/Home/HomePage";
import Applications from "./components/AllRoutes/AddApplication/Applications";
import Urm_university from "./components/AllRoutes/Universities/Urm_university";
import Search_course from "./components/AllRoutes/Courses/Search_course";
import DashboardAdmin from "./components/AllRoutes/Dashboard/DashboardAdmin";
import Action from "./components/AllRoutes/actions/Action";
import AdminLogin from "./components/CommonPage/AdminLogin";
import HistoryMain from "./components/AllRoutes/allApplications/HistoryMain";
import DetailView from "./components/AllRoutes/allApplications/detailView/DetailView";
function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  // const staffCheck = useSelector((state) => state?.users?.staffCheck);
  const userDetails = useSelector((state) => state?.users?.user);

  const token = localStorage.getItem("token");

  console.log("resres123", userDetails?.role);
  return (
    <Layout>
      <Routes>
        {userCheck && token ? (
          userDetails && 
          (userDetails.role === "admin" || userDetails.role === "staff") ? (
            <>
              <Route path="/dashboard" element={<DashboardAdmin />} />
              <Route path="*" element={<DashboardAdmin />} />
              <Route path="/action" element={<Action />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/history" element={<HistoryMain />} />
              <Route path="/urm" element={<Urm_university />} />
              <Route path="/search" element={<Search_course />} />
            <Route path="/detailview/:id" element={<DetailView />} />

            </>
          ) : (
            <>
             <Route path="/dashboard" element={<DashboardAdmin />} />
            <Route path="/detailview/:id" element={<DetailView />} />
              <Route path="*" element={<DashboardAdmin />} />
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
            {/* <Route path="/universities" element={<Universities />} /> */}
            {/* <Route path="/reach" element={<Reach />} /> */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/partner" element={<Partner />} />
            {/* <Route path="/ambassadar" element={<Ambassadar />} /> */}
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
