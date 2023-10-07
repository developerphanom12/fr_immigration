import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected';
import Layout from './components/MainLayouts/Layout';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PageNF from './components/PageNF';
import HomePage from './components/HomePage';
import Ambassadar from './components/Ambassadar';
import  Partner from './components/Partner';
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
              <Route path='/' element={<HomePage />} />
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
flex: 1;
.app{
  margin: 0;
  padding:0;

}
`
