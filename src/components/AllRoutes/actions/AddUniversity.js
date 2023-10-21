import axios from "axios";
import React, {useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";

export default function AddUniversity() {
  const [newUniversity, setnewUniversity] = useState({
    university_name: "",
    course_type: "",
    founded_year: "",
    contact_number: "",
    person_name: "",
    
  });
  const courseApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/universitys`,
        newUniversity,
        axiosConfig
      );
      console.log("resr", res);
      if (res.status === 201) {
        setnewUniversity(res?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  

  console.log("newuniii", newUniversity);
  return (
    <Root>
      AddUniversity
      <div className="courses">
        {" "}
        University Name* :-
        <input
          type="name"
          value={newUniversity.university_name}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, university_name: e.target.value });
          }}
          placeholder="University Name"
        />
      </div>
      <div className="courses">
        {" "}
        Course Type* :-
        <input
          type="name"
          value={newUniversity.course_type}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, course_type: e.target.value });
          }}
          placeholder="Course Type"
        />
      </div>
      <div className="courses">
        {" "}
        Founded Year* :-
        <input
          type="name"
          value={newUniversity.founded_year}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, founded_year: e.target.value });
          }}
          placeholder="Founded Year"
        />
      </div>
      <div className="courses">
        {" "}
        Contact_Number* :-
        <input
          type="name"
          value={newUniversity.contact_number}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, contact_number: e.target.value });
          }}
          placeholder=" Contact_Number"
        />
      </div>
      <div className="courses">
        {" "}
        Person Name* :-
        <input
          type="name"
          value={newUniversity.person_name}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, person_name: e.target.value });
          }}
          placeholder="Person Name"
        />
      </div>
      <button onClick={()=>{courseApi()}}>button</button>
    </Root>
  );
}
const Root = styled.section`


`;
