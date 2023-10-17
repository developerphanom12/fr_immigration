import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected';
import Layout from './components/MainLayouts/Layout';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PageNF from './components/PageNF';
import Ambassadar from './components/Ambassadar';
import  Partner from './components/Partner';
import HomePage from './components/Home/HomePage';
import Universities from './components/Universities';
import Reach from './components/Reach';
import Applications from './components/admin/Dashboard/Applications';
import History from './components/admin/Dashboard/History';
import Urm_university from './components/admin/Dashboard/Urm_university';
import Search_course from './components/admin/Dashboard/Search_course';
import DashboardAdmin from './components/admin/Dashboard/DashboardAdmin';
import Documents from './components/Documents';
function App() {
  const userCheck = useSelector((state) => state?.user?.userCheck);
  const token = localStorage.getItem("token")
  return (

    <Layout>
      <Root className='app'>
        <Routes>
          {userCheck && token ?
          
            <> 
              <Route path='/login' element={<Protected><Login/></Protected>} />
              <Route path='*' element={<PageNF />} />
            </> :
            <>
              <Route path='/dashboard' element={<DashboardAdmin />} />
              {/* <Route path='/user' element={<Protected><User/></Protected>} /> */}
              <Route path='/documents' element={<Documents/>}/>
              <Route path='/applications' element={<Applications/>} />
              <Route path='/history' element={<History />} />
              <Route path='/urm' element={<Urm_university />} />
              <Route path='/search' element={<Search_course />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/universities' element={<Universities />} />
              <Route path='/reach' element={<Reach />} />
              <Route path='/ambassadar' element={<Ambassadar />} />
              <Route path='/partner' element={<Partner />} />
              <Route path='*' element={<PageNF />} />

            </>
          }

        </Routes>
      </Root>
    </Layout>
     
  );
}

export default App;
const Root = styled.section`
font-family: "Gill Sans", sans-serif;
flex: 1;
.app{
  margin: 0;
  padding:0;

}
`
