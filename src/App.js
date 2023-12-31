import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/CommonPage/Login";
import Layout from "./components/MainLayouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import PageNF from "./components/CommonPage/PageNF";
import Partner from "./components/CommonPage/Partner";
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
import UniAddCourses from "./components/universityPortal/listOfAllCourse/UniAddCourses";
import PgRequire from "./components/universityPortal/PgUgPage/PgRequire";
import UgRequire from "./components/universityPortal/PgUgPage/UgRequire";
import ListCourses from "./components/universityPortal/listOfAllCourse/ListCourses";
import UniDashboard from "./components/universityPortal/UniDashboard";
import GetUg from "./components/universityPortal/PgUgPage/GetUg";
import GetPg from "./components/universityPortal/PgUgPage/GetPg";
import StuDashboard from "./components/StudentPortal/StuDashboard";
import ShowList from "./components/universityPortal/listOfAllCourse/ShowList";
import GetStudentFile from "./components/AllRoutes/Dashboard/AllUserFile/GetStudentFile";
import GetUnivFile from "./components/AllRoutes/Dashboard/AllUserFile/GetUnivFile";
import GetUniDetail from "./components/AllRoutes/Dashboard/AllUserFile/GetUniDetail";
import UrmDetails from "./components/AllRoutes/Universities/UrmDetails";
import FrontPages from "./components/CommonPage/FrontPages/FrontPages";
import GetAgentFile from "./components/AllRoutes/Dashboard/AllUserFile/GetAgentFile";
import MainChart from "./components/AllRoutes/Dashboard/Charts/MainChart";
import { useEffect } from "react";
import { loaderAction } from "./redux/users/action";
import Loader from "./components/Loader";
import UniRegister2 from "./components/universityPortal/UniRegister2";
import Register2 from "./components/StudentPortal/Register2";
import Parter2 from "./components/CommonPage/Partner2";

function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users?.user);
  const token = localStorage.getItem("token");

  console.log("resres123", userDetails?.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaderAction(false));
  }, []);
  return (
    <>
      <Layout>
        <Routes>
          {userCheck && token ? ( //Agent ----------------------------------------------
            <>
              <Route path="/dashboardd" element={<DashboardAdmin />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/history" element={<HistoryMain />} />
              <Route path="/detailview/:id" element={<DetailView />} />
              <Route path="/urm" element={<Urm_university />} />
              <Route path="urmdetails/:id" element={<UrmDetails />} />
              <Route path="/pgrequire" element={<PgRequire />} />
              <Route path="/ugrequire" element={<UgRequire />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/changepass" element={<ProfilePassword />} />
              <Route path="/search" element={<Search_course />} />
              <Route path="/listcourses" element={<ListCourses />} />
              <Route path="/showlist/:id" element={<ShowList />} />
              {userDetails.role === "admin" ? (
                // Admin-specific routes ---------------------------------------------------
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
                  <Route path="/listcourses" element={<ListCourses />} />
                  <Route path="/showlist/:id" element={<ShowList />} />
                  <Route path="/getagentfile" element={<GetAgentFile />} />
                  <Route path="/getstudent" element={<GetStudentFile />} />
                  <Route path="/getuniv" element={<GetUnivFile />} />
                  <Route path="/getunidetail/:id" element={<GetUniDetail />} />
                  <Route path="/mainchart" element={<MainChart />} />
                </>
              ) : userDetails.role === "staff" ? (
                // Staff-specific routes ---------------------------------------------------
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
                  <Route path="/listcourses" element={<ListCourses />} />
                  <Route path="/showlist/:id" element={<ShowList />} />
                </>
              ) : userDetails.role === "student" ? (
                // Student-specific routes -------------------------------------------------
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
                  <Route path="/listcourses" element={<ListCourses />} />
                  <Route path="/showlist/:id" element={<ShowList />} />
                </>
              ) : userDetails.role === "university" ? (
                //University-specific routes ----------------------------------------------
                <>
                  <Route path="/uniaddcourses" element={<UniAddCourses />} />
                  <Route path="/listcourses" element={<ListCourses />} />
                  <Route path="/showlist/:id" element={<ShowList />} />
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
            // If the user is not authenticated ---------------------------------------------
            <>
              <Route path="/unilogin" element={<UniLogin />} />
              <Route path="/uniregister" element={<UniRegister />} />
              <Route path="/uniregister2" element={<UniRegister2 />} />
              <Route path="/" element={<FrontPages />} />
              <Route path="/home" element={<FrontPages />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/stafflogin" element={<StaffLogin />} />
              <Route path="/studentlogin" element={<StudentLogin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register2" element={<Register2/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<ForgotPass />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/partner2" element={<Parter2 />}/>
              <Route path="*" element={<PageNF />} /> 
            </>
          )}
        </Routes>
      <Loader />  
      </Layout>
    </>
  );
}
export default App;
