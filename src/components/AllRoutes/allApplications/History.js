import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { EXCHANGE_URLS_APPLICATION } from '../../URLS';

export default function History() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getHistory = async ()=>{
    const axiosConfig = {
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
    try{
      const res = await axios.get(`${EXCHANGE_URLS_APPLICATION}/fetchallapplication`, axiosConfig)
      setApplications(res.data.data[0].applications)

    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getHistory();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter applications based on the search term
    const filteredApps = applications.filter((app) =>
      app.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredApplications(filteredApps);
  };

  console.log("applications",applications)
  return (
    <Root> Application History
      <h1>Application History</h1>
      <div>
        <input
          type="text"
          placeholder="Search applications"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className='app_table'>
        <div className='app_header'>
          <div>Cams Id</div>
          <div>Student Name</div>
          <div>University Name</div>
          <div>Course Name</div>
          <div>Status</div>
        </div>
        {applications && applications.map((i)=>{
          return(
            <div className='app_body'>
              <div>{i?.application_id}</div>
              <div>
                <p><span>{i?.student_firstname}</span></p>
                <p>Passport No: <span>{i?.student_passport_no}</span></p>
                <p>Counsellor : <span>{i?.user_id.username}</span></p>
              </div>
              <div>
                <p>{i?.university_id.university_name}</p>
                <p>{i?.university_id.person_name}</p>
                <p>{i?.university_id.contact_number}</p>

              </div>
              <div>{i?.course_id?.course_name}</div>
              <div>{i?.application_status}</div>


            </div>
          )

        })}

      </div>
    </Root>
  )
}
const Root = styled.section`

display: flex;
flex-direction: column;
gap: 10px;

p{
  padding: 0;
  margin:0;
  text-transform: capitalize;
}

.app_table{
  display: flex;
  flex-direction: column;

  .app_header{
    display: flex;
    background-color: lightblue;
    >div{
      flex:1;
      padding: 10px;
      border: 1px solid gray;
      /* text-align: center; */

    }
  }
  .app_body{
    display: flex;
    >div{
      flex:1;
      border: 1px solid gray;
      padding: 5px;
      text-transform: capitalize;

      span{
        font-weight: 500;
      }
    }
    &:hover{
        background-color: lightgray;
        cursor: pointer;
      }
  }

}

`
