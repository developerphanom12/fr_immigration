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
import ForgotPass from "./components/CommonPage/ForgotPass";
import StaffLogin from "./components/CommonPage/StaffLogin";
import ProfileUser from "./components/MainLayouts/Profile/ProfileUser";
import ProfilePassword from "./components/MainLayouts/Profile/ProfilePassword";
import StudentLogin from "./components/StudentPortal/StudentLogin";
import Register from "./components/StudentPortal/Register";
import CreateStaff from "./components/AllRoutes/actions/CreateStaff";
import LatestUpdates from "./components/StudentPortal/LatestUpdates";
import Profile from "./components/MainLayouts/Profile/Profile";
import UniLogin from "./components/universityPortal/UniLogin";
import UniRegister from "./components/universityPortal/UniRegister";
import UniAddCourses from "./components/universityPortal/UniAddCourses";
import PgRequire from "./components/universityPortal/PgRequire";
import UgRequire from "./components/universityPortal/UgRequire";
import ListCourses from "./components/universityPortal/ListCourses";
import UniDashboard from "./components/universityPortal/UniDashboard";
import GetUg from "./components/universityPortal/GetUg";
import GetPg from "./components/universityPortal/GetPg";
import StuDashboard from "./components/StudentPortal/StuDashboard";
// import Student from "./components/AllRoutes/allApplications/detailView/Student";

function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users?.user);

  const token = localStorage.getItem("token");

  console.log("resres123", userDetails?.role);

  return (
    <Layout>
      <Routes>
        {/* {userCheck && token  || userDetails.role === "staff" || userDetails.role === "student"  ? (
          userDetails && 
          (userDetails.role === "admin") ? (
            <>
              <Route path="/dashboardd" element={<DashboardAdmin />} />
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
             <Route path="/dashboardd" element={<DashboardAdmin />} />
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
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/stafflogin" element={<StaffLogin/>} />
            <Route path="/studentlogin" element={<StudentLogin/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPass/>} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/user" element={<ProfileUser/>} />
            <Route path="/address" element={<ProfileAddress/>} />
            <Route path="/changepass" element={<ProfilePassword/>} />

          </>
        )} */}

        {userCheck && token ? ( // If the user is authenticated
          <>
            <Route path="/dashboardd" element={<DashboardAdmin />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/history" element={<HistoryMain />} />
            <Route path="/detailview/:id" element={<DetailView />} />
            <Route path="/urm" element={<Urm_university />} />
            <Route path="/pgrequire" element={<PgRequire />} />
            <Route path="/ugrequire" element={<UgRequire />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepass" element={<ProfilePassword />} />
            <Route path="/search" element={<Search_course />} />
            {userDetails.role === "admin" ? (
              // Admin-specific routes
              <>
                <Route path="/dashboardd" element={<DashboardAdmin />} />
                <Route path="/createstaff" element={<CreateStaff />} />
                <Route path="/action" element={<Action />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/history" element={<HistoryMain />} />
                <Route path="/detailview/:id" element={<DetailView />} />
                <Route path="/urm" element={<Urm_university />} />
                <Route path="/pgrequire" element={<PgRequire />} />
                <Route path="/ugrequire" element={<UgRequire />} />
                <Route path="/search" element={<Search_course />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/latestupdates" element={<LatestUpdates />} />
                <Route path="/changepass" element={<ProfilePassword />} />
              </>
            ) : userDetails.role === "staff" ? (
              // Staff-specific routes
              <>
                <Route path="/dashboardd" element={<DashboardAdmin />} />
                <Route path="/history" element={<HistoryMain />} />
                <Route path="/detailview/:id" element={<DetailView />} />
                <Route path="/urm" element={<Urm_university />} />
                <Route path="/pgrequire" element={<PgRequire />} />
                <Route path="/ugrequire" element={<UgRequire />} />
                <Route path="/search" element={<Search_course />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/changepass" element={<ProfilePassword />} />
              </>
            ) : userDetails.role === "student" ? (
              // Student-specific routes
              <>
                <Route path="/latestupdates" element={<LatestUpdates />} />
                <Route path="/studash" element={<StuDashboard />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/pgrequire" element={<PgRequire />} />
                <Route path="/ugrequire" element={<UgRequire />} />
                <Route path="/history" element={<HistoryMain />} />
                <Route path="/detailview/:id" element={<DetailView />} />
                <Route path="/urm" element={<Urm_university />} />
                <Route path="/user" element={<ProfileUser />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/changepass" element={<ProfilePassword />} />
              </>
            ) : userDetails.role === "university" ? (
              //University-specific routes
              <>
                <Route path="/uniaddcourses" element={<UniAddCourses />} />
                <Route path="/listcourses" element={<ListCourses />} />
                <Route path="/pgrequire" element={<PgRequire />} />
                <Route path="/ugrequire" element={<UgRequire />} />
                <Route path="/getug" element={<GetUg />} />
                <Route path="/getpg" element={<GetPg />} />
                <Route path="/unidash" element={<UniDashboard />} />
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          // If the user is not authenticated
          <>
            <Route path="*" element={<PageNF />} />
            <Route path="/unilogin" element={<UniLogin />} />
            <Route path="/uniregister" element={<UniRegister />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/stafflogin" element={<StaffLogin />} />
            <Route path="/studentlogin" element={<StudentLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPass />} />
            <Route path="/partner" element={<Partner />} />
            {/* <Route path="reach" element={<Reach />} /> */}
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
